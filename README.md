### Deployed to Heroku [https://treedatastructure.herokuapp.com/]

### Description
Использован ReactJs без сторонних библиотек. Результаты выводятся в консоль ctrl+shift+I или F12 потом F5 для расширенных объектных нотаций
- Имплементированы класс Древо (TreeClass) + два доп конструктора для него
- До того, как замаунтится TreeClass используем lifecycle hook и добавляем в стейт дефолтное древо
- Имплементированы методы поиска, подсчета высоты, удаления, добавления вершин/узлов (addChild, removeChild)
- Использованы алгоритма обхода в ширину и глубину (BFT и DFT)
- Имплементирован алгоритм Прима для путей и остовного древа связного графа для занятий 3 и 4.

#### Лабораторное занятие №1. Представление деревьев в памяти
Написать класс на любом языке программирования, который позволит представлять дерево в памяти любым доступным способом.
Класс должен поддерживать следующий функции:
- Добавление вершин
- Удаление вершин
- Поиск вершины
- Подсчет высоты дерева

Построение самобалансирующегося дерева не обязательно, но будет плюсом.

#### Лабораторное занятие №2. Алгоритмы обхода деревьев

Реализовать на классе, созданном в Лабораторной работе №1. Алгоритмы обхода указанные в лекции 10.4.

#### Лабораторное занятие №3. Алгоритмы построения кратчайших путей в дереве

Реализовать на классе, созданном в Лабораторной работе №1. Алгоритмы поиска кратчайшего пути указанные в лекции 10.5

#### Лабораторное занятие №4.  Алгоритмы построения остовных деревьев

Реализовать на классе, созданном в Лабораторной работе №1. Алгоритмы построения остовных деревьев  указанные в лекции 10.6.
