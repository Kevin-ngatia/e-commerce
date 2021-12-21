import React,{useState,useEffect}from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import { Avatar, Button } from 'antd'




function Navbar() {
    const[display,setDisplay]=useState(true);
    const [modalOpen,setModalOpen]=useState(true)
    const[size,setSize]=useState(window.innerWidth);
    const checkSize=
        window.addEventListener('resize',()=>{
            setSize(window.innerWidth)
        });
    const hideItem=()=>{
        if(size>500){
            setDisplay(false)
        }
        else{
            setDisplay(true);
        }
    }  
    useEffect(()=>{
        hideItem()

    },[size])  
    


    
    return (
       
        <div className="nav-container">

           
            <img className="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAAERCAMAAAD/iZ1nAAAAilBMVEUBAQH39/cAAAD7+/v///+VlZXDw8PY2Ni+vr78/Px4eHjs7Ozz8/Pp6elYWFhmZmYfHx/Pz89gYGCFhYUKCgp/f3+bm5snJyeIiIijo6Orq6vU1NRCQkJTU1Pg4OCfn5+3t7dtbW0XFxdKSkouLi6xsbFra2s1NTU7OzsYGBh0dHQQEBBNTU0kJCRx/HkaAAAKEUlEQVR4nO2de5+iLBTHFbCyNLPbdLWabjszO+//7T2oqajgLQ5P7Yff/rOTcs5X4nICBMN8Uxn/N0BXaXDV0uCq9U+A45cXF5zgoP/iCihkCRxb6A10GuECON4hZLy8KLqLc+Bk9gbYodCO5MCdd8jvUAj5mAHH/ptwU/K1zYL33gfc0uBqpcFVS4OrlgZXLQ2uWhpctTS4amlw1dLgqqXBVUuDq5YGVy0NrloaXLU0uGppcNXS4KqlwYt2hZLlQBa4kHP+8/P5M5/LfpBnwRmCj/N0uDpsjj1/23fdkWOaNsmJenJGIzfY+r3jdb1aeOfLT+cH6A6eOJzsF8ujHzg4wrRtu7TAIaf4Kr0tehbsuNvBeja9t8bvBP5wshuuewGOaMWgdQqfInwE19/M9i3oW4PHpvfWMaD+ngAuP0DI7/aW3mcj+HbgocXP0zUwK5AfJaFQvtNynpQlMb7tHheXWvjm4JGp2yYI85lHG5Pao6DfG1zXS2u1GH6fTt50HGnqnU7fw8XMWq43g942cB9VgvcImBa/0XE4qWRvCk5t3C2fA43DvMVuv7defe8v4ua7rI/zbbYe+K5JeHlBrfYPezF6Q3A0X9OszluPMtnZHq3bPQckzKTi15foMl1t/FEZn9p3r39ERA3BkU8KNsloYHkfHVthzjP8jFfHUjnEzvw5cGqehTb7a+/nWWIu/9jyHQae7J8sKvTGU5TlmNj99ZjLzC3INde5Js6Wb8bwZPNsGQ9t9mg1NAfDn7xDhmL+sZt63zMrbDlCrQ8z5k50OyQfW9ZqeJueL5/cR4j+9K4jyu6Kv9E2zaF7nLI+Epd3bxb3+WxbHYtZm4bOzOdJI4/NgPb4q9vus4Af/v/vZnR+vjlMQHPQUWtQ2efbiWuERtw7Hh2AHbZO3qTkooKmRc+ZMoTZYfVcUt/n41HsnLZKduWNcX8w8tfsl1oJ0zJWCa3uLB83DVNsP6JAa1J/b4RP7CCu/HUg7cBpeLUZ8fp8ociBMiCvGXcCbw5Odegtg6xhO+qI3KO9e7skYatrrmUFWdHdd0EBecRY4S+cUenaBwqKqeh9jmPH1VrwvN8yc9xAe853TtsVd7CkIVbUxP8p3oH7x+JHZBG1+79/T1Fcz2EnltSiEpIX89wm/vCL7Q1LzUf5WyJ7NoE3wKUnq+Pu8Avo7rJkmFy/Ch1fqVxw8rPYUy5NNhHGN9mtSuSnl+UPHpXWm6NjLXipK6e/q/pZdpDg0gCj/Y9lhL5NO+HmBEpWTVdDkw1KbhDaPp4Xk2WTmLPLr3wKe4wrFPlbvh9Na9tse8lJNn9gby+NYuVu4yq09/QpOvY5PtBnbY6TG8dNuCAck8BrGOJ3HBAKo5UBoXWfd8mtK+Tkl5duT8j2Vt/XPwceoc8t7u8T1KsDH/Ho0O/60hj7ubFDgZvkJQChBC80NIisJIGLTH7X1E57I8MLAPilBpx2+K8JjpwacNFYyf8O3q+pnTIGNSCmUtC1snbi4GXBZ5WFHB+lOIEAP1eCk9XLgqNqcOGwWisnENOF1SE5qRx2aOwDBHxQAU5DYSk+QMCrQnLJPuSCV4XkvGC8iw8Q8N8KcG4w3sEHCDgqDa4w4A1+UDbxAbIIIXkvlydJbxcDgYtDcryV5AIGfCgs5FKCcQMMvDQOlxVxGcG4AQYuDslJxfRIKxdA4OKQXNIMI9DSJnQU1E45wbgBB74SFHLO6FtHD0DgvHH0UDZvDKmTByDw8ih5LDJ+bXBDNA5HRIsKWjuAAheMw3FH3zo5gALnh+TythMBA+fPbNqHlwf/4IKT08uD8zt9cn91cFFI/nqLgkuGN5zaKSsYNyDBeSG5fX0D8B0HXOJuVnDgiDdDz5le7GofDpwTktsSl/uBvSPBCcmlBeMGKLhVKuTSgnEDFHxcApc0+habhwMvj5IT7z3ASyE5+XwHcE5ILi0YN2DBD4VmRerefpDgt0Iht9dvAl6cGq9bkdfOOiB4MSSXMhWeWgd8uzBdZpVI5r6boOD5kBz3pRqHBF/kCrktZSo8NQ4Jnp8alzMVnhqHBM+Pw8mZCk+Ng4LnpsaJzLoJ+85ybrVq1SsmXWyDgrPjcEC2YcDZqXGZwbgBDT5nwOWNvsW2QcHZl3/I5H3Ac+NwkjfaBgbPpsZlb7QNDJ6tVpU1FZ6ahgW/p+CypsJT07DgWUhOdu8EbjDjcJI3wYcGT1aryhx9iy0DgyerVeWsS2UtA4MnIbncYNyAB09CcmlT4allaPBHSC5tKjy1DLyH0GO1quRg3FAAHtsHMwwHHk+NSw7GDQXgkwhccjBuKACPO31J61JZw9AbfD1Ccumn3sCDhyE5wKk38ODhOJzsYNxQAR6uVgU42AkePNxRRta6VNYuPHgYkss/kQp+20B0tKUH44YS8BWRORWemoUH3xNp61JZs/DgBibTtwRHrsyp8NQs/J6eqAdxzJ0K8IO8tW+MVQXgJ/kdvhrwO8RJjirAkcyp8NSqgg13QU6g1DsFq5YGVy0NrloaXLU0uGppcNXS4KqlwVVLg6uWBlctDa5a/zg4b3t8JL4mTpa70tRVd3Au98NgxTPVXmmZRR3AP7FTlPm4FQ0dN69R8n4vGheT9ZOnnZsO5oP3wg21WZn8WYGGRaW0YTtOluMh5D5OAEqUvjVTfL8Qp1tkoTnB/HXw6JzfGxuT/hM5TumuyTEEZnx4QZYPaBLkzisw00VMIXh61EG41/giLSpzW7SAH42d3HE222fKeEh+XlEtAoyPM/qfGbNSCaHFYZnKyq5QcBwMF6m+sgotBg/NzVKthBsHN20OH9XEx2RYqjCiqhSC9/lXKsCF5rqBP+6m4MU1suJWoASOmhSVZo3K8+Bo500L2meVEwfnMaNp2qqIwNHldAvlZXqmclaBj0vHQ60z8FzlpJpn4Pz5fXQrmYMCpw1OrtEj6cR9+XXrZFfMCvDSvixQ4JTcymXrICvj03zWNQXH+TRQ4GF1mmSaMwHJ/HfCXsHNwHHf+Eg0wYDghZZA9Hm4GUUz8G0+DVxRqWq/KsF5TWiY40wQCQeO/i6GBXmM4z/Z1e9CGWf61MUsSaMQfF9qv9LlqAgdKipnLs1MPXgxcmTCIrQsvieegudjwCwELIKLe9h24FvCKeMzh4kO7exgMPTFnn8VhY5pB5SLup0BW8ZtFlwU/rYFD/9xmkN+3USlc1DTtlKchvOXBHDByQMNm0MOUjlR+S8ZQdYLSYOrlgZXLQ2uWhpctTS4amlw1dLgqqXBVUuDq5YGVy0NrloaXLU0uGppcNXS4KqlwVXrXwGXvysHlNCSBZe6QzioULK7+QNc0lGO8EKTxwZcD3DTmbxDnqPslIoEHDseZ5Lv5bQLkq0rE3ATE7c3eHUF2Yx6Ck7R30AZLQP+XtLgqqXBVUuDq5YGVy0NrloaXLU0uGppcNX6D8WFuaH1bMD3AAAAAElFTkSuQmCC" alt="logo" />
           
           
           
           
            <Link to='/'><button className='primary-btn'> <i className='fa fa-home'/> home</button></Link>
            <Link to='/about'><button className='primary-btn'> <i className='fas fa-user'/> Profile</button></Link>
            
            {display ? <button className='primary-btn' onClick={()=>setModalOpen(!modalOpen)}><i className={`${modalOpen?'fas fa-bars':'fas fa-times'}`} Style="color:black; font-size:large" /></button> :
             <div className='desktop-item'>
                 <Link to='/products'> <button  className='sign-btn'> <i className='fas fa-users-cog'/>sign-up</button></Link>
               
                
             </div>}
           
            
        </div>
    )
}

export default Navbar
