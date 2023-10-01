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

const ClickableWord: React.FC<ContentProps> = ({ content, tokens }) => {
  return (
    <>
      <div className="clickable">
        {content
          .match(/.*?[,?!".?”\s-, ]|[\w+]+/g)
          ?.map((word: string, i: number) => (
            <a
              key={i}
              href={`/word/${word
                .replace(/[.,?/#!$%^&*;:{}=\-_`~()"“” ]/g, "")
                .toLowerCase()}`}
            >
              {
                //enforcing mapping of tokens to page content and displaying
                tokens.find(
                  (element) =>
                    (element.value ==
                      word
                        .replace(/[.,?/#!$%^&*;:{}=\-_`~()"“” ]/g, "")
                        //punctuation affecting comparison  => force switch of punctuation mark
                        .replace("’", "'")
                        .toLowerCase() &&
                      element.value ==
                        content.slice(
                          element.position[0],
                          element.position[1]
                        )) ||
                    "”" //=> added to maintain punctuation order
                )
                  ? word //display word to screem
                  : " " // maintain word spacing
              }
            </a>
          ))}
      </div>
    </>
  );
};

const BookPage: React.FC<PageProps> = ({ book }) => {
  const [displayCount, setDisplayCount] = React.useState<number>(1);
  const start = displayCount > 1 ? displayCount : 0;
  const end = displayCount > 1 ? displayCount : 0;
  return (
    <>
      <div className="pages">
        {book.book_pages
          .slice(start, end + 2)
          .map((item: ContentProps, i: number) => (
            <div className="pages_page" key={i}>
              <ClickableWord content={item.content} tokens={item.tokens} />
            </div>
          ))}
      </div>
      <div className="pages_buttons">
        {!(book.book_pages.length + 1 == displayCount) && (
          <button
            className="pages_buttons_button"
            onClick={() =>
              setDisplayCount((prev: number) =>
                book.book_pages.length > prev
                  ? prev + 2
                  : book.book_pages.length
              )
            }
          >
            +
          </button>
        )}
        {!(displayCount <= 2) && (
          <button
            className="pages_buttons_button"
            onClick={() => setDisplayCount((prev: number) => prev - 2)}
          >
            -
          </button>
        )}
      </div>
    </>
  );
};

export default BookPage;
