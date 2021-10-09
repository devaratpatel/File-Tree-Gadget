import React, { useState } from "react";

const App = () => {
  return (
    <div>
      <Folder name="Desktop">
        <Folder name="Music">
          <File name="all_star.mp3." />
          <File name="express_file.mp3" />
        </Folder>
      </Folder>
      <Folder name="Applications">
        <Folder name="Facetime" />
        <Folder name="Adobe Acrobat Reader">
          <File name="covidTest.pdf" />
          <File name="passport.pdf" />
        </Folder>
        <Folder name="Music">
          <File name="all_star.mp3." />
          <File name="express_file.mp3" />
        </Folder>
        <File name="dogs.jpeg" />
        <File name="cats.png" />
        <Folder name="Random">
          <File name="weirdText.txt" />
        </Folder>
      </Folder>
    </div>
  );
};

const Folder = (props) => {
  const [isOpen, setIsOpenFunc] = useState(true);
  const { name, children } = props;

  const direction = isOpen ? "down" : "right";
  const handleClick = () => {
    setIsOpenFunc(!isOpen);
  };

  return (
    <div>
      <span onClick={handleClick}>
        <i className="blue folder icon" />
        <i className={`caret ${direction} icon`} />
      </span>
      {name}
      <div style={{ marginLeft: "18px" }}>{isOpen ? children : null}</div>
    </div>
  );
};

const File = (props) => {
  const { name } = props;
  const fileExtension = name.split(".")[1];
  const fileIcons = {
    mp3: "headphones",
    txt: "file outline icon",
    jpeg: "file image",
    png: "file image outline",
    pdf: "file outline pdf",
  };
  return (
    <div>
      {name}
      <i className={`${fileIcons[fileExtension]} icon`} />
    </div>
  );
};
export default App;
