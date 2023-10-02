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
          ?.map((word: string, i: number) =>
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
                    content.slice(element.position[0], element.position[1])) ||
                " "
            )
              ? word
                  .match(/[.,?/#!$%^&*;:{}=\-_`~()"“” ]|[\w+]/)
                  ?.map((letter) =>
                    word == letter ? (
                      //make sure punctuation marks are not clickable
                      <span
                        key={i}
                        style={{
                          pointerEvents: "none",
                          cursor: "default",
                          color: "#333222",
                          fontSize: "32px",
                        }}
                      >
                        {letter}
                      </span>
                    ) : (
                      <a
                        key={i}
                        href={`/word/${word
                          .replace(/[.,?/#!$%^&*;:{}=\-_`~()"“” ]/g, "")
                          .toLowerCase()}`}
                      >
                        {word}
                      </a>
                    )
                  )
              : null
          )}
      </div>
    </>
  );
};

const BookPage: React.FC<PageProps> = ({ book }) => {
  const [displayCount, setDisplayCount] = React.useState<number>(0);
  const start = displayCount;
  return (
    <>
      <div className="pages">
        {book.book_pages
          .slice(start, displayCount + 2)
          .map((item: ContentProps, i: number) => (
            <div className="pages_page" key={i}>
              <ClickableWord content={item.content} tokens={item.tokens} />
            </div>
          ))}
      </div>
      <div className="pages_buttons">
        <button
          disabled={displayCount < 1 ? true : false}
          className="pages_buttons_button"
          onClick={() => setDisplayCount((prev: number) => prev - 2)}
        >
          -
        </button>
        <button
          disabled={book.book_pages.length == displayCount ? true : false}
          className="pages_buttons_button"
          onClick={() =>
            setDisplayCount((prev: number) =>
              book.book_pages.length > prev ? prev + 2 : book.book_pages.length
            )
          }
        >
          +
        </button>
      </div>
    </>
  );
};

export default BookPage;
