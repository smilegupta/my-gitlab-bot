const axios = require("axios");
const authorizationToken = process.env.authorizationToken;

exports.handler = (event, context, callback) => {
    let headerMessage, styleType;
    if (event.body.status === "success") {
        headerMessage = `Deployment to ${event.body.environment} environment is successful`;
        styleType = "SUCCESS";
    } else {
        headerMessage = `Deployment to ${event.body.environment} environment was not successful`;
        styleType = "ERROR";
    }

    if (event.body.status === "running")
        return {
            statusCode: 200,
            body: "Pipeline is still running"
        };

    return axios
        .post(
            "https://konfhub.jetbrains.space/api/http/chats/messages/send-message",
            {
                recipient: {
                    className: "MessageRecipient.Member",
                    member: "username:Srushith"
                },
                content: {
                    className: "ChatMessage.Block",
                    style: styleType,
                    outline: {
                        icon: { icon: "merge-request-small" },
                        text: "Deployment Status"
                    },
                    sections: [
                        {
                            className: "MessageSection",
                            header: headerMessage,
                            elements: [],
                            footer: `Job Details: ${event.body.deployable_url}`
                        }
                    ]
                }
            },
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: authorizationToken
                }
            }
        )
        .then((response) => {
            return {
                statusCode: 200,
                body: "Message triggered successfully"
            };
        })
        .catch((error) => {
            console.log("Error", error);
        });
};
