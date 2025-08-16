## 🏗️ Feacture Based with Angular v20

## 📝 Overview

Angular v20 continues to evolve toward a more **modular**, **scalable**, and **maintainable** application model by embracing **standalone components** and promoting a feature-based architectural approach. These advancements streamline the development process, improve runtime performance, and foster a clear separation of concerns.

This project showcases how to structure a modern Angular application using **Feature-Based Architecture**, integrated with **Tailwind CSS** for building a responsive and visually appealing user interface. It serves as a reference implementation for developers aiming to build maintainable, enterprise-grade frontend applications using the latest Angular standards.

<p align="center">
  <a 
    href="https://v20.angular.dev/overview" 
    target="blank"
  >
    <img 
      src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*AKeww522_kpUoxEc"
      width="75%" 
      alt="Angular v20 Logo" 
    />
  </a>
</p>


## 🚀 Project Purpose

This sample application represents a simplified **Online Loan Management System** that allows users to:

- Register borrowers and assign loans.
- Track monthly loan installment payments.
- View outstanding and completed installments per loan.
- Calculate total profit generated from issued loans.

While demonstrating Angular 20 capabilities, this project also illustrates how to apply **Clean Architecture principles** in a frontend application — emphasizing modular design, testability, and loose coupling between components and services.

<p align="center">
	<img 
		src="https://github.com/jaimeyzv/angular-feture-based-architecture/blob/main/.project-ui-video/Online%20Loan%20Management%20System.gif"
		width="100%" 
		alt="Online Loan Management System - Demo" 
	/>
</p>

## 📁 Project Structure

```bash
└───src
│   ├── app/
│   │   ├── features/
│   │   │   ├── installments/
│   │   │   │   ├── components/
│   │   │   │   │   ├── installment-list/
│   │   │   │   │   │   ├── installment-list.component.html
│   │   │   │   │   │   ├── installment-list.component.scss
│   │   │   │   │   │   ├── installment-list.component.spec.ts
│   │   │   │   │   │   └── installment-list.component.ts
│   │   │   │   │   ├── installment-pay/
│   │   │   │   │   │   ├── installment-pay.component.html
│   │   │   │   │   │   ├── installment-pay.component.scss
│   │   │   │   │   │   ├── installment-pay.component.spec.ts
│   │   │   │   │   │   └── installment-pay.component.ts
│   │   │   │   ├── models/
│   │   │   │   │   └── InstallmentListModel.ts
│   │   │   │   └── services/
│   │   │   │       ├── installment-service.spec.ts
│   │   │   │       └── installment-service.ts
│   │   │   ├── loans/
│   │   │   │   ├── components/
│   │   │   │   │   ├── loan-create/
│   │   │   │   │   │   ├── loan-create.component.html
│   │   │   │   │   │   ├── loan-create.component.scss
│   │   │   │   │   │   ├── loan-create.component.spec.ts
│   │   │   │   │   │   └── loan-create.component.ts
│   │   │   │   │   ├── loan-list/
│   │   │   │   │   │   ├── loan-list.component.html
│   │   │   │   │   │   ├── loan-list.component.scss
│   │   │   │   │   │   ├── loan-list.component.spec.ts
│   │   │   │   │   │   └── loan-list.component.ts
│   │   │   │   ├── models/
│   │   │   │   │   └── loan-list.model.ts
│   │   │   │   └── services/
│   │   │   │       ├── loan-service.spec.ts
│   │   │   │       └── loan-service.ts
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
│   └── styles.scss
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```

This structure follows a feature-based, domain-oriented architecture, making the application easier to navigate, extend, and test. Each feature is self-contained, promoting high cohesion and low coupling — key principles in scalable frontend systems.

## 🅰️ How to Run the Angular Project

1. **Install dependencies**  
   Run the following command to install all required packages:

	```bash
	npm install
	```
2. **Configure the API base URL**	
	Go to the services classes and update the Web API base URL.
	Use the route provided by the [.NET 9 project](https://github.com/jaimeyzv/dotnet-clean-architecture) as the value. For example:
	
	```
		private readonly apiUrl = "https://localhost:5001/api";
	```
3. **Run the Angular application**	
	Start the dev server with:
	```
		ng serve
	```
	The app will be available at http://localhost:4200.
## 🔗 Backend Integration
This frontend pairs seamlessly with a companion backend project developed using **.NET 9**, forming a complete full-stack solution for loan management.

- [Online Loan Backend (NET 9)](https://github.com/jaimeyzv/dotnet-clean-architecture)

## 👤 About me

Hi, I'm **Jaime Zamora**, a Software Engineer with over 13 years of experience designing and delivering scalable, high-quality systems across various industries. I'm passionate about Clean Architecture, building maintainable codebases, and sharing best practices with the developer community.

📫 Let’s connect:

- [LinkedIn](https://www.linkedin.com/in/jaimeyzv)
- [GitHub](https://github.com/jaimeyzv)
