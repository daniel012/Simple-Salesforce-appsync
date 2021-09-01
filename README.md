[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
 
  <h3 align="center">Simple-Salesforce-appsync</h3>

  <p align="center">
    Create a GraphQL layer to expose Salesforce infomation using APPSync 
    <br />
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

SFDC it is a great tool to use, however, sometimes can be really tricky to expose information on it, this proyect give an altertive using AWS appsync to do so :smile:

### Built With

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
* [Serverless](https://www.serverless.com/)
* [Jsforce](https://jsforce.github.io/)
* [serverless-appsync-plugin](https://www.serverless.com/plugins/serverless-appsync-plugin)



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Please install [serverless](https://www.serverless.com/framework/docs/getting-started/) 
* npm
  ```sh
  npm install -g serverless
  ```

### Installation

1. Clone the repo
   ```sh
   git repo clone daniel012/Simple-sfdc-appsync
   ```
2. verify that you have serverless install with 
   ```sh
   server --version
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. enter your serverless credentials  
   ```sh
   serverless config credentials --provider aws --key YOUR_AWS_KEY --secret YOUR_AWS_SECRET -o
   ```
5. Add your Salesforce credentials in the serverless.yml
   ```yml
    SDFC_USER: user
    SDFC_PASSWORD: password
    SFDC_TOKEN: token
    SFDC_URL: url
   ```
7. Modify serverless.yml to add you AWS account Id 
   ```yml
      accountId: #YOUR account Id
   ```



<!-- Usage -->
## Usage
You can deploy your GraphQL layer using the following command 
```sh
serverless deploy
```

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Jesus Oliveros - [@OliverosDaniel7](https://twitter.com/OliverosDaniel7) - oliveros.jesusd@gmail.com


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/jesus-oliveros-507556108/
