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
        <div>
          {content
            .match(/.*?[,?!".?”\s-, ]|[\w+]+/g)
            ?.map((word: string, i: number) => (
              <a
                key={i}
                href={`word/${word
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
