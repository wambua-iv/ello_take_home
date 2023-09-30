import React from "react";

type PageProps = {
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
type ContentProps = {
  content: string;
  tokens: {
    value: string;
    position: number[];
  }[];
};



const BookPage: React.FC<PageProps> = ({ book }) => {
  const [showTitlePage, setShowTitlePage] = React.useState<boolean>(true);
  return (
    <>
      {showTitlePage && (
        <>
          <div className="title">{book.title}</div>
          <button onClick={() => setShowTitlePage((prev) => !prev)}>
            Read Book
          </button>
        </>
      )}
      {!showTitlePage &&
        book.book_pages.map((item: ContentProps) => (
          <ClickableWord content={item.content} tokens={item.tokens} />
        ))}
    </>
  );
};

export default BookPage;
