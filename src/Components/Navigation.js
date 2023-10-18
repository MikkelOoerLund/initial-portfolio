import './Navigation.css';

const LOGO_TEMPLATE_IMAGE_PATH = "/images/logo-template.png";



const Navigation = () => {


    return (

      <div className='container'>
        <img src={LOGO_TEMPLATE_IMAGE_PATH}  alt="idk" className='template-logo' />
        <h3 className='name-header'>Mikkel Lund</h3>
      </div>
     
      );

}

export default Navigation;