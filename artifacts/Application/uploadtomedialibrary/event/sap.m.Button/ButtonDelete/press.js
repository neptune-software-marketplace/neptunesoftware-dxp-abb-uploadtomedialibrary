const imageUrl = Image.getSrc();

// Replace special characters between with a space
const sanitizedUrl = imageUrl.replace(/%[a-zA-Z0-9]{2}/g, ' ');

const rootIndex = sanitizedUrl.indexOf("root");
let substringAfterRoot = "";
if (rootIndex !== -1) {
    substringAfterRoot = sanitizedUrl.substring(rootIndex + "root".length + 1);
} else {
    console.error("Root segment not found in the URL");
}

// Check if substringAfterRoot is not empty
if (substringAfterRoot) {
    // Call sap.n.Planet9.function()
    sap.n.Planet9.function({
        id: "Media",
        method: "FileDelete",
        data: {
            path: substringAfterRoot,
        },
        success: function (data) {
            sap.m.MessageToast.show("File Deleted from the Media Library.");
            Image.setSrc("");
            HBox.setVisible(false)
            ButtonDelete.setVisible(false)
            ButtonGetSrc.setVisible(false)
        },
    });
} else {
    console.error("Substring after root is empty.");
}


