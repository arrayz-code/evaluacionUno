class Product {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }
}

class UI {
    addProduct(product) {
        const productList = document.getElementById("product-list");
        const table = document.createElement("table");
        table.className = "table-auto w-full mt-4";
        table.innerHTML = `
            <thead>
                <tr>
                    <th class="px-4 py-2">Producto</th>
                    <th class="px-4 py-2">Precio</th>
                    <th class="px-4 py-2">Descripción</th>
                    <th class="px-4 py-2"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border px-4 py-2">${product.name.toUpperCase()}</td>
                    <td class="border px-4 py-2">${product.price}</td>
                    <td class="border px-4 py-2">${product.description.toUpperCase()}</td>
                    <td class="border px-4 py-2">
                        <a href="#" class="btn btn-danger delete-btn">Delete</a>
                    </td>
                </tr>
            </tbody>
        `;
        productList.appendChild(table);

        // Guardar en localStorage
        this.saveToLocalStorage(product);
    }

    resetForm() {
        document.getElementById("product-form").reset();
    }

    deleteProduct(element) {
        if (element.classList.contains("delete-btn")) {
            const row = element.parentElement.parentElement;
            const productName = row.querySelector("td:first-child").textContent.toLowerCase();
            row.remove();
            this.showMessage(`Producto "${productName}" Borrado Satisfactoriamente`, "red");

            // Eliminar del localStorage
            this.removeFromLocalStorage(productName);
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement("div");
        div.className = `bg-${cssClass}-100 border-${cssClass}-400 text-${cssClass}-700 px-4 py-3 rounded relative mt-2`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector(".container");
        const app = document.querySelector("#App");

        container.insertBefore(div, app);

        setTimeout(function () {
            div.remove();
        }, 3000);
    }

    saveToLocalStorage(product) {
        let products = JSON.parse(localStorage.getItem("products")) || [];
        products.push(product);
        localStorage.setItem("products", JSON.stringify(products));
    }

    removeFromLocalStorage(productName) {
        let products = JSON.parse(localStorage.getItem("products")) || [];
        products = products.filter(product => product.name.toLowerCase() !== productName);
        localStorage.setItem("products", JSON.stringify(products));
    }
}

document.getElementById("product-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;

    if (name.trim() === "" || description.trim() === "" || price.trim() === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const product = new Product(name, description, price);
    const ui = new UI();

    ui.addProduct(product);
    ui.resetForm();
    ui.showMessage("Producto Añadido Satisfactoriamente", "green");
});

document.getElementById("product-list").addEventListener("click", function (e) {
    const ui = new UI();
    ui.deleteProduct(e.target);
});
