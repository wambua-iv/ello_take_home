import React from 'react';
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

type Data = {
    book: {
      title: string;
      author: string;
      book_pages: {
        pageIndex: number;
        content: string;
        tokens: {
          position: number[];
          value: string;
        }[];
      }[];
    };
  };

const BookPages: React.FC = () => {
  const { book_number } = useParams();

  const [bookData, setBookData] = React.useState<Data>({
    book: {
      title: "",
      author: "",
      book_pages: [
        {
          pageIndex: 1,
          content: "",
          tokens: [
            {
              position: [34, 23],
              value: "",
            },
          ],
        },
      ],
    },
  });

  const books_endpoint = "http://localhost:3090/graphql"
  const get_book_query = `
  {
      book(id:${book_number}) {
          title,
          author,
          book_pages {
            page_index
            content,
            tokens {
              value,
              position
            } 
          },
    }
  }
  `;

  const { isLoading } = useQuery(
    "Query",
    async () =>
      await fetch(books_endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: get_book_query }),
      })
        .then((data) => data.json())
        .then((data) => setBookData(data.data))
  );
  if (isLoading) return <div>loading</div>;
  return !isLoading && <BookPage book={bookData.book} />;
};
export default BookPages;
