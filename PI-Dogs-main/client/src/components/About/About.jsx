import css from './About.module.css'
import about from './Tarjet.module.css'
import img from './perfil.jpeg'

function About(){
    return<div className={css.container}>
        <div className={css.navBar}>
            <a className={css.home} href="/home">Dogs!</a>
            <a className={css.add} href="/home/AddDog">Add</a>
        </div>
        <div className={about.container}>
            <div className={about.nameImg}>
                <h3 className={about.name}>Matias Sabio</h3>
                
                    <img  className={about.img} src={img} alt="" /> 
                
                <div className={about.more}>
                    <p>
                    Me gusta mucho todo lo que tiene que ver con la resolución de problemas, tecnología y el desarrollo de software.
                    Comencé a aprender software de manera auto didacta con cursos online, pero cuando vi lo mucho que me gustaba y quería poder trabajar de esto, decidí meterme de lleno en un bootcamp para estar mejor preparado para el mercado laboral. 
                    Soy dueño de un comercio con empleados a cargo y estoy buscando  insertarme en el mundo laboral de la tecnología y el desarrollo para poder crecer como profesional y obtener estabilidad y proyección a largo plazo.
                    </p>
                </div>
            </div>
            <div>
                <h3 className={about.title}>Full Stack Developer</h3>
                <h3 className={about.skills}>Skills:</h3>
                <span className={about.spanPills}>
                    <p className={about.pills}>JavaScripr</p>
                    <p className={about.pills}>React</p>
                    <p className={about.pills}>Redux</p>
                    <p className={about.pills}>Node</p>
                    <p className={about.pills}>Express</p>
                    <p className={about.pills}>PostgresSQL</p>
                </span>
                
                
                <div className={about.divContact}>
                    <h3  className={about.contact}>Contact:</h3>
                    <div  >
                        <p className={about.Wpp} >Wpp: </p>
                        <p className={about.num} > 1164281631 o </p> 
                        <a className={about.link} href="https://wa.me/qr/JTGB3SDSTEFCO1">https://wa.me/qr/JTGB3SDSTEFCO</a>
                    </div>
                    <div>
                        <p className={about.Wpp} >Email: </p><a className={about.link} href="mailto:matiassabio10@gmail.com">matiassabio10@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>       
    </div>
}
export default About