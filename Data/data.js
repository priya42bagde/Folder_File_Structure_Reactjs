const explorer = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "public",
      isFolder: true,
      items: [
        {
          name: "index.html",
          isFolder: false
        },
        {
          name: "indextSample.html",
          isFolder: false
        }
      ]
    },
    {
      name: "src",
      isFolder: true,
      items: [
        {
          name: "pic.png",
          isFolder: false,
          items: [
            {
              name: "pictures.png",
              isFolder: false
            }
          ]
        }
      ]
    },
    {
      name: "pitoroal.svg",
      isFolder: false
    }
  ]
};
export default explorer;
