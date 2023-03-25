AFRAME.registerComponent("create-markers", {
  
  init: async function() {
      
    var mainScene = document.querySelector("#main-scene");

     //get the dishes collection from firestore database //call getDishes function
    


     dishes.map(dish => {
       
        var marker = document.createElement("a-marker");   


     })

    //set the markerhandler component
    marker.setAttribute("markerhandler", {});
    mainScene.appendChild(marker);


    // Adding 3D model to scene
    var model = document.createElement("a-entity");    
     
    model.setAttribute("id", `model-${dish.id}`);



    marker.appendChild(model);


    // Ingredients Container
    var mainPlane = document.createElement("a-plane");
    mainPlane.setAttribute("id", `main-plane-${dish.id}`);




    marker.appendChild(mainPlane);



    // Dish title background plane
    var titlePlane = document.createElement("a-plane");
    titlePlane.setAttribute("id", `title-plane-${dish.id}`);


    mainPlane.appendChild(titlePlane);


    // Dish title
    var dishTitle = document.createElement("a-entity");
    dishTitle.setAttribute("id", `dish-title-${dish.id}`);


    titlePlane.appendChild(dishTitle);


    // Ingredients List
    var ingredients = document.createElement("a-entity");
    ingredients.setAttribute("id", `ingredients-${dish.id}`);


    mainPlane.appendChild(ingredients);

  },


  getDishes: async function() {
    return await firebase
      .firestore()
      .collection("dishes")
      .get()
      .then(snap => {
        return snap.docs.map(doc => doc.data());
      });
  }
  
  });
