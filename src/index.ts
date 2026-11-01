// ============ Часть 2. Базовые типы ============

// Задание 2.1. пять базовых типов с явной аннотацией
let studentName: string = "Анна";
let studentAge: number = 20;
let isEnrolled: boolean = true;
let middleName: null = null;
let hobby: undefined = undefined;

// Задание 2.2. без аннотации, типы вывел компилятор (видно по наведению в VS Code)
let city = "Москва";         // string
let population = 12_000_000; // number
let isCapital = true;        // boolean

// Задание 2.3. ошибки типизации (были, исправлены)
// Ошибка 1: title = 123; // Type 'number' is not assignable to type 'string'.
// Ошибка 2: pages = "много"; // Type 'string' is not assignable to type 'number'.
// Ошибка 3: isRead = 1; // Type 'number' is not assignable to type 'boolean'.
let title: string = "Книга";
let pages: number = 300;
let isRead: boolean = false;

// Задание 2.4. почему let userName: string = null; не работает
// При strict: true включается strictNullChecks, которая запрещает
// присваивать null и undefined переменным других типов.
// Исправление: let userName: string | null = null;

// ============ Часть 3. Типизированные функции ============

// Задание 3.1
function formatPrice(value: number): string {
    return value.toLocaleString("ru-RU", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " ₽";
}

function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}

function logMessage(message: string): void {
    console.log(message);
}

function repeat(text: string, times: number = 2): string {
    return text.repeat(times);
}

function describeUser(name: string, age?: number): string {
    if (age !== undefined) {
        return `${name}, возраст: ${age}`;
    }
    return name;
}

// Задание 3.2. корректные вызовы
console.log(formatPrice(1234.5)); // "1 234,50 ₽"
console.log(clamp(15, 0, 10));    // 10
logMessage("Привет");
console.log(repeat("abc"));               // "abcabc"
console.log(describeUser("Иван"));        // "Иван"
console.log(describeUser("Иван", 25));    // "Иван, возраст: 25"

// некорректные вызовы, закомментированы (ошибки компилятора):
// formatPrice("100"); // Argument of type 'string' is not assignable to parameter of type 'number'.
// clamp(5, 0);        // Expected 3 arguments, but got 2.
// logMessage(123);    // Argument of type 'number' is not assignable to parameter of type 'boolean'.

// Задание 3.3. void vs undefined
// void — функция ничего не возвращает (или возвращает undefined неявно),
// используется для побочных эффектов.
// undefined — конкретное значение, которое функция обязана вернуть явно.
function returnUndefined(): undefined {
    return undefined;
}

// ============ Часть 4. Мини-проект «Библиотека» ============

import { createBook, markAsRead, getBookInfo, countReadBooks } from "./library.js";

const books = [
    createBook("1984", "Джордж Оруэлл", 1949),
    createBook("Мастер и Маргарита", "Михаил Булгаков", 1967),
    createBook("Преступление и наказание", "Фёдор Достоевский", 1866),
];

// проверка на существование наших книг в массиве
if (books[0] && books[2]) {
    books[0] = markAsRead(books[0]);
    books[2] = markAsRead(books[2]);
}

books.forEach(book => console.log(getBookInfo(book)));
console.log(`Прочитано книг: ${countReadBooks(books)}`);