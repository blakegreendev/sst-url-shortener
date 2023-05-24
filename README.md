[![Edit in Eraser](https://firebasestorage.googleapis.com/v0/b/second-petal-295822.appspot.com/o/images%2Fgithub%2FOpen%20in%20Eraser.svg?alt=media&token=968381c8-a7e7-472a-8ed6-4a6626da5501)](https://app.eraser.io/workspace/o0f6OyVAOaYwegBAcPxH)
# SST URL Shortener
Deployed the following API endpoint:

[﻿https://5ps585eku8.execute-api.us-east-1.amazonaws.com](https://5ps585eku8.execute-api.us-east-1.amazonaws.com) 

For example, this endpoint takes in a body of:

{"url":"[﻿https://google.com"](https://google.com")} 

The setUrl lambda function takes in the original url and then creates a uuid and then stores it in Dynamodb with the API endpoint appended with the uuid. 

The getUrl lambda function takes in the code or uuid and will automatically redirect to the original url. For example,

[﻿https://5ps585eku8.execute-api.us-east-1.amazonaws.com/75c9ccd1](https://5ps585eku8.execute-api.us-east-1.amazonaws.com/75c9ccd1) 

The Dynamodb table is modeled with ElectroDB. 

# Diagram
![Figure 1](https://firebasestorage.googleapis.com/v0/b/second-petal-295822.appspot.com/o/images%2Fworkspaces%2Fo0f6OyVAOaYwegBAcPxH%2FfOqwZSAlb4WzIPKFPr1HgU6sG6L2%2F---figure---bYiL_9sQrfip4s4fJhIMm---figure---ICzndpf8EWFlKNEIDzwFJw.svg?alt=media&token=a86f9b7f-40cd-458d-bcfd-6b7834331962 "Figure 1")

# Todo
- Build a frontend with a form



<!--- Eraser file: https://app.eraser.io/workspace/o0f6OyVAOaYwegBAcPxH --->