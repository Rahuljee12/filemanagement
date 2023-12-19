const explorer = {
  id: "1",
  name: "Root",
  isFolder: true,
  items: [
    {
      id: "2",
      name: "public",
      isFolder: true,
      items: [
        {
          id: "3",
          name: "Data",
          isFolder: true,
          items: [
            {
              id: "4",
              name: "folderData.js",
              isFolder: false,
              items: [],
            },
          ],
        },
        {
          id: "5",
          name: "index.html",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: "6",
      name: "src",
      isFolder: true,
      items: [
        {
          id: "7",
          name: "components",
          isFolder: true,
          items: [
            {
              id: "8",
              name: "Folder.js",
              isFolder: false,
              items: [],
            },
          ],
        },
        {
          id: "9",
          name: "App.js",
          isFolder: false,
          items: [],
        },
        {
          id: "10",
          name: "index.js",
          isFolder: false,
          items: [],
        },
        {
          id: "11",
          name: "styles.css",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: "12",
      name: "package.json",
      isFolder: false,
      items: [],
    },
  ],
};

export default explorer;
