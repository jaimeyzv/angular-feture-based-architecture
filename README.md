## 🏗️ Feacture Based with Angular v20

## 📝 Overview

Angular v20 reinforces the shift toward a more modular, scalable, and maintainable development model by embracing **standalone components** and promoting a **feature-based architecture**. This modern approach streamlines the developer experience, enhances performance, and encourages better separation of concerns.

This project demonstrates how to structure an Angular application using **Feature-Based Architecture**, while integrating **Tailwind CSS** to deliver a sleek, responsive UI with a focus on great user experience. It aims to serve as a reference implementation for developers seeking clean and scalable frontend solutions.

<p align="center">
  <a 
    href="https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html" 
    target="blank"
  >
    <img 
      src="https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg"
      width="75%" 
      alt="Nest Logo" 
    />
  </a>
</p>


## 🚀 Project Purpose

This sample application represents a simplified **Online Loan Management System**, enabling the following core features:

Register borrowers and their respective loans.

Track monthly installment payments.

Display outstanding vs. completed installments for each loan.

Calculate the total profit generated from all loans.

Beyond showcasing Angular 20 capabilities, this project demonstrates how to implement **Clean Architecture principles** in a frontend context, emphasizing modular design, testability, and separation of concerns.

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

This structure follows a domain-driven, modular architecture, making the codebase easier to scale, test, and maintain.

## 🔗 Backend Integration
This frontend is designed to work seamlessly with the following .NET 9 backend, forming a full-stack, production-grade application

- [Online Loan Backend (NET 9)](https://github.com/jaimeyzv/dotnet-clean-architecture)

## 👤 About me

Hi, I'm **Jaime Zamora**, a Software Engineer with over 13 years of experience designing and building scalable, high-quality systems across diverse industries. I’m passionate about applying **Clean Architecture** principles, writing maintainable code, and sharing my knowledge with the developer community.

📫 Let’s connect:

- [LinkedIn](https://www.linkedin.com/in/jaimeyzv)
- [GitHub](https://github.com/jaimeyzv)
