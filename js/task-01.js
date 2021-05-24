const categories = document.querySelectorAll('.item');
console.log(`В списке ${categories.length} категории.`);

for (const item of categories) {
    const headerEl = item.querySelector('h2').textContent;
        console.log('Категория:', headerEl);

    const categoriesEl = item.querySelectorAll('li').length;
        console.log('Количество элементов:', categoriesEl);

        const nameAnimal = item.querySelectorAll('li').textContent;
        console.log('Животные', nameAnimal);
};