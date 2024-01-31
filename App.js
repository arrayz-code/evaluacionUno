class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
    }

}




class UI {
    addProduct(product) {
        const productList = document.getElementById("product-list");
        const element = document.createElement("div");
        element.innerHTML = `
                  <div class="card text-center mb-4">
                      <div class="card-body">
                          <strong>Producto</strong>: ${product.name} -
                          <strong>Precio</strong>: ${product.price} - 
                          <strong>Descripcion</strong>: ${product.description}
                          <a href="#" class="btn btn-danger" name="delete">Delete</a>
                      </div>
                  </div>
            `;
        productList.appendChild(element);
      }


      resetForm(){
document.getElementById("product-form").reset()

      }
    deleteProduct(element) {

        if(element.name === "delete")

        element.parentElement.parentElement.remove()
        this.showMessage("Product Deleted Succsssfully", "success");


    }

    showMessage(message, cssClass) {
        const div = document.createElement("div");
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
    
        // Show in The DOM
        const container = document.querySelector(".container");
        const app = document.querySelector("#App");
    
        // Insert Message in the UI
        container.insertBefore(div, app);
    
        // Remove the Message after 3 seconds
        setTimeout(function () {
          document.querySelector(".alert").remove();
        }, 3000);
      }
    

}

document.getElementById("product-form").addEventListener("submit", function (e) {
    const name = document.getElementById("name").value
    const description = document.getElementById("description").value
    const price = document.getElementById("price").value
    console.log(price, description, name)

    const product = new Product(name,price,description)
    const ui = new UI()
    
    ui.addProduct(product)
    
    ui.resetForm()
ui.showMessage("Producto Añadido satifactoriamente")
    e.preventDefault();
    })
    

    document.getElementById("product-list").addEventListener("click", function(e){

        const ui = new UI()
        ui.deleteProduct(e.target);
    })
      
