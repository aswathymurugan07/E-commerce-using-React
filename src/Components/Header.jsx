import React from "react";
import '../App.css'
import ThemeButton from "./ThemeButton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header(){
    const cartItems = useSelector((state)=>state.cart.items)
    return(
        <>
        <header>
        <div className='navbar'>
            <div className='nav-logo'>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBCAYAAACO98lFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAiqSURBVHgB7VtrbBxXFT7nzuzau14/EyduHo0tqxUWQRgBLUFRCRUqqmokfiAh+ANCQkJCgCpQEdDyCvwoICR+gRBQpAqBlJ8VRAgEpUgNjYCUNoqJ105MFWzHib322t6HZ+Yezp3XzuzMbGJ3x1bQfsrmzty5Z2buN+ee14wBOuiggw4aQGgDSqXSQI3w0xpqpyTRIwKxj9tZJLhoSOu16nrpYUA8Q0SDiHAdCC/x/gv16ua5kydPbsM+402RcPny5ezwfce/yhP6Iu8WksZJaUF1axNMw2i++rwE+vZbxsefg32EgF1icXFxePjI/S8xAd8ARQDRHwDpE4jiHZvl9Ze3ymtQrWxxN60JoUFPbz/keweelyBP8+w/wweuAMGoIPzF1eLsd+FexM3V8gX+0c3V9fnl1fJpr/9q8dr5mdlrdLU4tzwzNzdljy1tPOOMLdPy7fJXvLEzs9c/z2Nranxxbu6bcC+BJ/OUS8D1UrV6wuvnST2lJjQzd21lenr6waDMUmn9Cz4RAdKmi8UPFueuWzZxc3OnYR+w4+WwQtTH6vyk2pYAnx3M5f6jtovFYh8iPemMwq9NTEzMBOVGBvt/REC/dnfPev0TDzzweynl92wpEmdhH7BjEmSp/AQAjfDvwn1D/b/z+kmIJ4hghADmHxwf+0msrHQmyWPObGzQIa8/q4tnudngI2dmZ2cPwR5j5yQAvl+1POFzwX4kze4XCL9Nkj1ysHea5a6o7YpRfszrHxsbW+MT/sU+rxCPwR5jxyQg4jtVy0thOtgvSY46A7QXW5+AXnfk8Wiwm7XDWT4WHYU9xo5JIJJDqkUpa8F+JiejWtOSt1vLQ83dyDUd2lD/Mbk52GPsIk64U3xlwr2GXQdL/0/okAAdEmx0SIAEK3fr0fc9zz7rWNwx+eOfn4FDh0A8+51X4eIra16/dWJ0krq7B7SFG6/ixuYaJIC+9OVJOnV6AM+/MI8/++m8L3/48Gilt3d0c2FhHpYW58uWCTfqBhR0Afdnu5xrA/518h+Xvg5thp7QP8X0DEArVCqTQQq1N+a9zcmWDqRed9qNjVEeN+rLL98EXFoEUv2g+tH9hyqGsIEkVyAFJC2HAuwDOPbwtzV0mLSI/D5C6IUUECGBHn9c6Z4O+wCBDRXS3NYKHGetGIAUECFhoVptyTZHjE4LBLtCuey01WrkEGpa48ZcQiQFr6My2PYj8sR7NLPPIC1RoLLJ0W0+DznD3JW64G9+BXiV045/XYocE6oO5yqB93RkWDoPKSAyD7L0PhDJT1ndpzTeRG10mw3jKxdiD3FhVsXcDgmxmpCOrYosB0OjVIzP3UAAZbxtRQGn5faiCxCxNyTwY+huJaDXF6Cwch7SAGeiQTvIN+d6iEZX9uVjx9qeZUaXAyWznX13HQqr31KjQD6kQ20xB3KjfUGnS4KvDaJxT35Y1z08XIAbN6rQRkRmIPnFSdzA7qkKZE+pUoCjmmLIhNxHtkD0SWgX2AxkCRpuR7gTl2FP1HbjGCFBULwb0g5akT7slfavfUDBNtm3upq/HEIk9ECbESHBlOn44ruGJnz/3IgaA4ctq+2GO6oJSKn44ruFCCR13kbITeowCG1GNN5BkbqL1I6ZoB2NL8MdMDhUcVdet9ShIhEKQkDOfVz5Mfzk1jOT74k/M5mbFfLnVKlJYFHozrrCSOXDH3/9h81SERKUTSBsy8vqROjjBmTeHh9wZQP3dMBW1GZlxY9CAqREg41KI9YQjpUVHgcgVMweISGaQCH2Q8rAnnYa08B5MZzEe8/SW02c7/TRc6OROCjqImkP0uguSAUIYTfiMxLoXenJHmiWiywHTUCBYlIH85oOmI0eoPrOl47I7DIDvROQAy2EOk/aphmVKvBklN75Lsfsiti8mIiRjsRV3eovtS9axXwMmSIH5uBDoJf+xsWVekt5NU6rvAFYX4qem8CnuLEcGiGngeo9Kvw7KBNZDiw4AmkjFyXBOPIhqL71LLcfbilqDr0XKm/7AVTHPxd7nI2g/zlMs01Q0EA7HJEJ7tDUVJ4Is5AmWC8xZjmQ1uO2rcMUyrp2OxNvuoKOzduWgctJKSOGP0TC8h2qSu0A5tLxDD4IQul49AZwuLkrRIKQtVRqeKF7yKdkFF0Igf5yEDGawBNuTYJBmfQ1IZsuCRCYE7rrgcLubjBRQCGDVtsztGZgV7okYOM1RaxhxDuRIEFvWVVqB0RvujaBg8ZQlThCBEJr74Ai/foiDqZMgqBQZhY1jnSACQl1h+MES6afNxRSJgGxHt532kY6joNrv5wMzTOsCZh+QSUpCkHTeSlj9U1AK1DWNe5WLfY4ewQVQPhlMC+nCtiFgXqPDNmF5ogx9eQpyTDq66/ZrTn4MJi98URQ1zBsj9gfyULm1ouQAOUZG+oWNY5Ck2HjGModWLKQ9gcLSWm02CzyxP4ExvCjUOOwWP/vOdDXFDFkFwYodxzqxz8GsnsERG0J9Ft/Tr4Gw3OLdi3BCscKgJb6Qu6f3m6IBBRYgHQ9WEsX2T3zfa5n6GAefAS2T3yKf9Exiqz89NOcZNWSryHI4onbc4uLGpG0ZE1ACf3t+QuIeNgEtFA1tLYgf+VpXhLvAnP4AyBzKpdz0mHcXgVt7SJkb/5RVdGgFdyH75wzJpPkd8pDwfHNqXS6NuEu8wa99Hf7t1sQRPOH4HJgQkKFlfBzwXRJEHv0mSa/vvNVZdt0Zq8UwdvmZX8wPD4Adiep3iZmUjY4LrjYal/I4BcWlmwsCYNJkI5KhEKBprAZ0o0Y006jXXBNJKNsgOE++ayOoGsOE3WDVOAUKhyJpp1Ug6W002j/OlxdUpNV+qAmr37ZDDoBhFoWhiohNtCkCZRq2Izde0OC+vDHWwZKC+we/ikiFPhYqG4SdpGEt1lwDdLCHmkCKSfI+pDR0S+sKOi8k9HUl/hkQQcddNBBB8n4H/lKKBzeB3aRAAAAAElFTkSuQmCC" alt="" />
                <p>SHOPPING</p>
            </div>
            <ul className='nav-menu'>
                <Link style= {{textDecoration:'none'}} to='/home'>Home</Link>
                <Link style= {{textDecoration:'none'}} to='/about'>About</Link>
                <Link style= {{textDecoration:'none'}} to='/products'>Products</Link>
                <Link style= {{textDecoration:'none'}} to='/contact'>Contact</Link>

            </ul>
            <div className='nav-login-cart'>
                <Link to='/cart'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKjSURBVHgB7ZhdiE1RFMf/M0g8mHnhBXVJijQ8yGfpTBh5IsmzpLz6aJ49eMKbvEiaKI+kdIvU+MigMMhnYe4YUdQw8lEaZmat9jrtNXfu7ex9z9nnzMP86n/3Onufs87+3utcYIpsaSKtJO0gNde5Z4R0gdSPgvlIGk3QHUwCziG5on9JrZjEdMBWNkKBNCeU31f2RhTI9ITyn6RnMAtuN2kGisFpjZxC8hwOrcGkHmV6lT0As13lRUnSfpebF8K2bB/yo1W993jSYmJ4nx0Sez3yo13ZV+HIDZiW9SI/uuSdg3zh0qPMPUnbSLOQD5Gk3fzjWtHbkk4jrUF4lsEupDL/uFb0Cem/2GsRns3KvgVPXsPMmcsIz3V511M0wFl5+DvCMoc0LO86GWe6Dj3TIynvb0sQDt6W4oOojAZYBLsB70c44m3ps8706dEK6avYbQjHJkl7kIIrMK19jjCsgh21vbrAp0eZOD5dgTAR/zZl39QFvhV9qewNyJ4OSXnEPugClzBPc1fZW0h/kB3caXEg0o0UtJAuIZ9AOUIKziCfSlZQY6Sb4AYvnG9yP6/8TtI/hGEINv71pgTb4p0oANfFxOc7t5J79gRpAekXsocjtAekt0jBQeQzR7lDWpCSwzBncMiK9iFDlpPOi2OeAtdI62Dmso+OkT6Jn1ekPfDf2+vC8WIfJvbEG/gdq0dr+OD/DLYiIw4ox7xVXVTXnY4+5qpn+Kg8DbNg+foRMqIsDh+rvBeS1+XoI4Kt6GrJO6Ly5lU/0Mh8GJB0MUykz1+m8yXvh5uLcRv6LtI72I/G38jocydC/RXb7uHnfR0frqPixKEq58OS5wOPSKXKD/8jM7vWza5nfS1KMN/fM2Giqi/wh5/dTlpKeoiqYHmKkIwB/Vg4cSkh2w4AAAAASUVORK5CYII=" alt=""/></Link>
                <div className='nav-cart-count'>{cartItems.length}</div> 
            </div>
        </div>     
        </header>

        </>
    )
}
export default Header