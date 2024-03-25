  import IMAGES from "../assets/Images";
function Hero() {
    return (
    
    <div className="p-5 text-center bg-light mt-58">
       <img src={IMAGES.ztech} style={{width:'125px',height:'125px'}}></img>
        <h1 className="mb-3">Welcome To Zetech University</h1>
        <h4 className="mb-3">Notice Board</h4>
        <a className="btn btn-primary" href="/create" role="button">Create Notice</a>
    </div>
    
    );
  }
  
  export default Hero;