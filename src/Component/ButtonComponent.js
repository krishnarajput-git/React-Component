function ButtonComponent(){
  return(
      <div>
          <h1>This is Functional Component </h1>

          <button 
          name="button-1"
          value="greate"
          onClick={onGreatClick}
          
          >
              Greate
          </button>
      </div>
  );
}  

const onGreatClick = (evt) => {
    const btn = evt.target;
    console.log(`The user clicked ${btn.name}: ${btn.value}`);
};
export default ButtonComponent;