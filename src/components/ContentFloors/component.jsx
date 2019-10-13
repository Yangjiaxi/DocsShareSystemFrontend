import React, { memo } from "react";

import ContentCell from "../ContentCell";

const ContentFloors = memo(({ contents }) => {
  // console.log(contents);
  return (
    <>
      {contents.map(
        ({ content, id, needFetch, time, commentsCount }, index) => (
          <ContentCell
            key={index}
            content={content}
            id={id}
            needFetch={needFetch}
            time={time}
            commentsCount={commentsCount}
          />
        ),
      )}
    </>
  );
});

export default ContentFloors;
