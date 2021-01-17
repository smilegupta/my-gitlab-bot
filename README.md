# Getting Started with Serverless by Making a GitLab Bot
[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/smilegupta)
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/smilegupta) [![Made With Love](https://img.shields.io/badge/Made%20With-Love-orange.svg)](https://github.com/smilegupta)

### What is Serverless
Serverless computing allows you to build and run applications and services without thinking about servers. With serverless computing, your application still runs on servers, but all the server management is done by AWS. Using AWS and its Serverless Platform, you can build and deploy applications on cost-effective services that provide built-in application availability and flexible scaling capabilities. This lets you focus on your application code instead of worrying about provisioning, configuring, and managing servers.

### Why build a serverless application?
Building a serverless application allows you to focus on your application code instead of managing and operating infrastructure. You do not have to think about provisioning or configuring servers since AWS handles all of this for you. This reduces your infrastructure management burden and helps you get faster time-to-market.

##### Building a serverless application offers you four main benefits:
- No server management
- Flexible scaling
- High availability
- No idle capacity

### How do I build a serverless application?
You can build a serverless web application by using several AWS services together. Each service is fully managed and does not require you to provision or manage servers. You only need to configure them together and upload your application code to AWS Lambda, a serverless compute service.

### Installing Serverless
###### Open up a terminal and type npm install -g serverless to install Serverless.

 ```npm install -g serverless```
 
 ###### Once the installation process is done you can verify that Serverless is installed successfully by running the following command in your terminal:

``` serverless```

### The Serverless Framework needs access to your cloud provider account so that it can create and manage resources on your behalf.

###### Once your have made your AWS account, then You can configure the Serverless Framework to use your AWS API Key & Secret in two ways:
- Setup with the aws-cli
```  aws configure
AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
 ``` 
 
 - Using the aws-profile option
 ``` serverless deploy --aws-profile devProfile ```
 
 ### How to get started
 
 ###### Initial Requirenments 
- Install Node.js 6.x or later on your local machine
- Install the Serverless Framework open-source CLI version 1.47.0 or later

###### Creating and deploying a serverless Service
1) Opening the folder of your service: ```$ cd your-service-name```
2) Setting up an endpoint: You need to define a endpoint in your ```serverless.yml``` that will trigger your serverless function.
3) Deploying the Service: ```serverless deploy -v```
4) Testing your Service: ```serverless invoke local -f space-bot```

### Serverless Plugin to have dotenv file
- serverless-dotenv-plugin

