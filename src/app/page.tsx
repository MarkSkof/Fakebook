'use client'
import Navbar from './components/Pages/Navbar';
import Sidebar_Posts from './components/Pages/Sidebar_Left';
import Feed from './components/Pages/Feed';
import Friends from './components/Pages/Friends';
import SavedPostsPage from './components/Pages/SavedPost';
import EventsPage from './components/Pages/EventsPost';

import React, { useState, useEffect } from 'react';
import SideBar_Contacts from './components/Pages/Sidebar_Right';
import Videos from './components/Pages/Videos';
import ProfilePage, { ProfileProps } from './components/Pages/ProfilePage';
//import useFetchData from './DataBaseQueries/Query';

//export const userId = 1;

export default function HomePage() {

  /*
  const queryParams = {
    userId: '1', // TODO -> would get from login but oh well
  };*/

  fetch(`http://localhost:4000/user/getById`, { method: "POST", body: JSON. stringify({ name: "Simon", }), }).then(
    (result) => { }).catch((error) => {}) 

  // fetch data
  //const response = fetch('http://localhost:4000/user/getById')
  

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFriendsModalOpen, setIsFriendsModalOpen] = useState(false);
  const [isSavedModalOpen, setIsSavedModalOpen] = useState(false);
  const [isVideosModalOpen, setIsVideosModalOpen] = useState(false);
  const [isEventsModalOpen, setIsEventsModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  useEffect(() => {
    if (isFriendsModalOpen || isSavedModalOpen || isVideosModalOpen || isEventsModalOpen || isProfileModalOpen) {
      setIsModalOpen(true);  // If any modal is open, set isModalOpen to true
    } else {
      setIsModalOpen(false); // If all modals are closed, set isModalOpen to false
    }
  }, [isFriendsModalOpen, isSavedModalOpen, isVideosModalOpen, isEventsModalOpen, isProfileModalOpen]);

  const openFriendsModal = () => {
    setIsFriendsModalOpen(!isFriendsModalOpen);
    setIsSavedModalOpen(false);
    setIsVideosModalOpen(false);
    setIsEventsModalOpen(false);
    setIsProfileModalOpen(false);
  };

  const openSavedModal = () => {
    setIsFriendsModalOpen(false);
    setIsSavedModalOpen(!isSavedModalOpen);
    setIsVideosModalOpen(false);
    setIsEventsModalOpen(false);
    setIsProfileModalOpen(false);
  };

  const openVideosModal = () => {
    setIsFriendsModalOpen(false);
    setIsSavedModalOpen(false);
    setIsVideosModalOpen(!isVideosModalOpen);
    setIsEventsModalOpen(false);
    setIsProfileModalOpen(false);
  };

  const openEventsModal = () => {
    setIsFriendsModalOpen(false);
    setIsSavedModalOpen(false);
    setIsVideosModalOpen(false);
    setIsEventsModalOpen(!isEventsModalOpen);
    setIsProfileModalOpen(false);
  };

  const openProfileModal = () => {
    setIsFriendsModalOpen(false);
    setIsSavedModalOpen(false);
    setIsVideosModalOpen(false);
    setIsEventsModalOpen(false);
    setIsProfileModalOpen(true);
  };

  const openHomeModal = () => {
    setIsFriendsModalOpen(false);
    setIsSavedModalOpen(false);
    setIsVideosModalOpen(false);
    setIsEventsModalOpen(false);
    setIsProfileModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {<div>console.log(data)</div>}
      <Navbar 
      openHomeModal={openHomeModal} 
      openCloseFriendsModal={openFriendsModal} 
      openSavedPostsModal={openSavedModal} 
      openCloseVideosModal={openVideosModal} 
      openCloseEventsModal={openEventsModal} 
      openCloseProfileModal={openProfileModal}
      />
      <div className="flex flex-1">
      <Sidebar_Posts 
      openCloseFriendsModal={openFriendsModal} 
      openSavedPostsModal={openSavedModal} 
      openCloseVideosModal={openVideosModal} 
      openCloseEventsModal={openEventsModal} 
      />
      <div className="content" style={{
        position: "absolute",
        top: "46px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "50%",
        height: "calc(100vh - 46px)",
        overflowY: "auto"
        }}>

        {!isModalOpen ? (<Feed />) : (
          <div className="w-full">
          {isFriendsModalOpen && <Friends />}
          {isSavedModalOpen && <SavedPostsPage />}
          {isVideosModalOpen && <Videos />}
          {isEventsModalOpen && <EventsPage />}
          {isProfileModalOpen && <ProfilePage id={0} 
          name={'Hero'} 
          profileImage={'https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-pm1cary85vjb1.jpg?width=755&format=pjpg&auto=webp&s=cb9b202f3307b50dc79ebcf33cb6c1277aee88b9'} 
          bannerImage={'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFRUXGBcXFxgVFxUXGhgYFxUWFxUXFhUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAIIBhAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EADYQAAECBAQDBwQCAgIDAQAAAAEAAgMEESExQVFhBRJxIjKBscHR4RORofBC8SNSFHIzYrIG/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APjjZgCgPiU0Ck2SepTUJgFhggIFCclwldag600sfA+iIEM3XA6lj4H0O6Dk2eyUnKRvpg1rfIZbosxFrZv3UgcPrdxQNyrgRUGqZqhQZVre6KHWpVojwBUlAlxUVA6obJoUawk2zyKrF5oh0CcleFtxddA3BbQIoK4IIaLWGmnRDc/IX30QXiGvZGOum/XRXhCgpjvr13VGCitVAUFViGxVOamKyZ+dLz9OHcZkZ/CBdkzyc7Q40ccj6Zp7h0AUqLoctwcmnMtuBw9rB2RQ+fVBIdknxgt+meb9OyPMTDWAknDLOulNVhubEmH6AfYe5QLujF/K1ziaWFTX7LZkZagXZTgYr2hUbrSiSwYKju//AD8eXTAONKFHbzjlFt9Om6hfWwPU+g3VhayDkF1OycQLbjUeqLVBiNr6HMHUIf1wLPIB1wBGo9kDDn0F8F5edmKlwaTyk3FTQkZ0TE7OOjO5GVp57nZaMrwKg7V3H8IMSTluY1yW9LQqBNQuENa3s2P4OxQXPANB3tMx10QSYALeXGuX7kvPTzXA9ol2QJJPhdeiaKbnM/uSUmJcOQZnDOHmIdl7CWghgoFlSEyIXZdZpwdodDtuhca41QFkM1ObhlsN0E//AEPE2/8Ajb3gbuB7uwOq824LlVowZcFAKUlsytRgoEOHQWOPn0RwP3RAlPy5IqCdaZf2ssQzWma9A5BgtDHc1K6j23QH4Vw4NHM7FG4pPNhtpi4iw9TsqzvFGMbVpDicAPM6LzUWIXElxqSgahQfqEdqlbGuS9DLwGsbyt/teXln0K3ZSdtRx6E+RQPErD4rPBxDRcDE+2y7xTiVeww2zOuw2WSgIYei6qNeVEGoqxYoaFVkWotiqmWrclAGBM0JrmtAFBhyzRlXqjgBB0IMU83ZHiV1xJsPE+yPDYALIBQYPLQHwPod04EMitiqGJy44ZH0O6A7n0xQnsDrn+ks15ca5ZBNVQGhQ25I4KyJ2YLC0jx3CZE8HAcuJ1y90BJ+e5BQXdltuVlSU5yGjsCb611WrLwG53OpTTYYGACATXVuF2qtEaBU+J9wsyYiuiHkZhmdfhByajmKfpsuMzr8LT4dINhi+JzVpGVEMbpsoLtVJmZawVPgNToEvNTjYYq6u1M/lefdMOiv5neAyAQbEWE2J2jj6aLSlYbA2jcP3FZkA2VJmbdDIeLjBw1Hug3arM4txEisOHd5sf8A1r6pac443lAhk1OdO78ofD3hALh0d0MBjwQL0OmxWpVOwjZKTTAwc2DfL48vIKOfS5wWLOR3R3BjBUA23Op0UnZh0V3IwGnnudlu8J4eITb3ccUFeDSLYVnDtm9dRt0zC1aoMVgcKHqCMQciEhN8VEIEPFX0tTB2hrluEDXEJ4Qm1Nye63M+w3Xn4IjF5i0qT3hhUaDos+LOOc/ncanyGg2XoeFxyQEEa+uo2NiOoUKemYPNcd7z2PuvPz8/QUbjgTpqOqDnFZsU5Bc57fKyiw0rSy1uEcJ5+2/u5DVbLpFpysg8xKy9blakNtAjz0u2GOYWb5H2/eg2jP8AQg46HW5xGG3yuh2RxXaqrhVB0lLTcyGDfIe6rMzfLb+X46pKVlnRXeZQDhwnPrQVzqh8prResgyzWt5QLJWbkGkVAoR+UGNAgqR5jILkePajcNUxw3h/N2nC2Q1+ECboDuXmpZCAXqnMBFKLInpVrDUYHDY6IEmwlEyIevmVEFoLaI3MhpOJGIfUINFcJr0QS8mlqVRQgJDNMkQFLPdQJSUmi2xuPJBqOeAKlJmIXnbIKhcXmpwyCZY2iDrLW+3si1VChGIQeX86dd0Ap665KwzimDDRGNogZliPFMVWHORix4c3p12XZydc8BoHKDjvt0QaBmQ80Hd8/hFguDTWn7skZRtEzVBoNeDcIczMtY3mcempOgWHL8QMJxabtqaDTol48d0V1T4DIIOzEw6K6p8BkAnJWBRclpcBOtCAjUvN9oEff26rv1Dzcv59Oqu5tqIMJsAk0W/wqWtVAEEVQ4sy6E4OFwbOGu+xQegc8AVJoBmsZ3EhFdQDsDCue5CzuJ8UMWwqG6andV4e1BuyYYx1aAVz0+FpVWO02S0PixhVY4FwHdv+Dsg1+IT7YTam5OA1+F5SajmI4uJqfTQKkzMOe4ucak/jYbJrhsiXmpwQDkJTncAcPNerloIYKBDZKtDaU+2IOoOqyOJcWcKwxiLF4z6DIoD8Y4vSrGG/8jpsN0GDyvDSQDTwrssJa0kbBB6OFEBFsPLZcjRg0FzjQBYz5h0M87b5Ea/KzeI8QdFOjRgPU7oDzU0Y7qVo0YD1O6chQHsbc8zRnmOuywoNaimK9VJtIF0CaXm5kMGpyCNxF3IeyK2rT/X49vtly0s6K7zOiDsnLuiuubZleglIYYOQChH53+FaWgNY3lb/AGrRG199N0FiVhcU4jzVYw2zOuw2VOIcSc4FooBgSP5ewWagdlXNcRzCtPyt+G4EAjBeXgmhWjCmSy4vtr7INOYjhgqf72C89NTJe6p8BopNzLnuqfAaICDSg3Ao4eKirLyLiK1oog68pQmhrmixH5BXgy4xKAMIvJqKnyTwquhdc5ACYdZZ6ciwy43TEvAAQBk4bxlb9wTiuEtNzHLQDE47boCE5D+lYDJUYRSyug4DTpkfQ+6JVUO6z48cnstNR+T1KDk1HBNslJaE8mw+6PAkdVqQYYAQCawjFVjRQ0VKYjutvl19llxZZ73X+B0QIxHlxqnZGUfjS358E1A4eAtFjaYIFWhQmth4n0QeITYa4AH/ALbdN0VpFLYILDRdqq1ULtUFnOAuVjT01zmgw812PHdEPKMK236rSk+Fhoqbu8kGPLwS40AWtAg0yotCXlWtvRB4rHaxtf5ZDUZ12QDLqdf38JCfg55puWiBwrmceuikRtUGTLwKkc1hmvVS0ENFAsf6IulDxCI1phg2wBzA0BQaPF+K0qxhvmRlsN1gi64m5aEgHLwr3WlDbRc+kKfv43XYJP8ALHLp7oCFtrrJmoNCteqDEh1QF4PJtpz4nyTPEZ8QxQXccB6lZL5gwjVpxxGXWiRiRC4kk1JQGgzJ56k1JxWzJRw21gDnp12Xnm4rTgmyDdJWHxTiNeww2zOuw2S8xOOoWB3Z/NNK6JJBZqnKoxMtYgrDhppjVSE2mOKKgVmYOaZ4bJjvG+ihQHTBZ3Tjj+6oNSLNsaaE0Ki8+41uVED8OEiC3T9xUUc4AXQWc6ioDW6XFzt5JgILVV4EYOFR9kCKbFJQnEGoNEGlMR6WFz5JISr3X805KgU3zTKBaXlnNGNdvYopRapWMObA0HnugDFiF55W4ZnX4TktJhoveuKtLQA0I9UFGnlscMj6H3XY8cMFT4bqkxFa1p5sNNdljFxcbkmmt0GjBjFxqf6Rw6iWl20RiUDUrMh4tiMRogzk0e6zvZnT5WM95a4lpI6JmUiIDQ+FE3Lk3BkSwWcXbeyPL4IpdS5QJuNL5LMmI5iHlbh59U5NsL7g0Gnr12TUhJBgriTmgtw+QDBe7jimwVyqWnpoMbfE4BAScnBDF7k4DX4WSyWMV3M92P42Cz4kZzjVxqd1qcNJKBqDwsNu1x6ZHqo5qeas+diB5o00IxPogSnZunZbjmdEkyXcRWlvNaMjw2pq7AZala30Rog8/AkHEc1LJtjKLWfEDBU2AWCycBeTg04bIHQFHCqlVyqDjXZH+0KameUbqk7GAFM8tt0pKwDEcBriT+4oJAgOiG3iUZ/DnVoFuy8BrG0AVkHnmyxBocQqR4+Q+6cnYzYjqNOFq6/CrISFTV2AyQClJAuHMbDLdViyDhUgWC3wEKYjhgqf7QYUOGmWNS0KP2jUUB/HwnEEIXAV1LzMWls/JBJiPSwx8kCWgF5oPErsvLl5p+VtwYIaKBAt/wABuiicUQZfOKVyQC4uOyA1ybYEFmBdw6KLhOSCsYoUKGjclFZoQQu5RUZI0vMBw3zCXmDZKNAGKB58xzGgw8/hFqlJWiaQcdM8hFcDj7piLMNa3mrbLdZs6cEqgLFil5qftomIEJcl4aaaEHG26ZHTYqzjXDxPsquvbLP2VQOW2WXsUCseHUo0NnKKjEIxao+wKByWm2ubWtKYg5LMnJ0vdQd0fncpE4osBt0GpCNlb/l8hFe6cdt0OGhTtxRBozU61ja1rXADP4Xn48YvJc43/bBDTMnKl52QSTlS87Lfl4QYKfvRSBCDRQLO4rPC7G3/ANj6BBbifEaVYw3zOmwSci5JJyUag0RGLbj7a7Jtk4ws562z226pCtllzDKFAxNzn1HXs3Iep3T8nLwyMAViNFbL0HD4BaBVB2NLBt24aafCRmZjlGpT07Ohlv5HDbcrNMqDShoM6+aAEtLuiO8yvQNl2hvLS3rr1XJeCGCgRCUA2xaGjjfI5H2KyeJ8Q5uy3DM6/CnE50O7IwGep22WcUFoTqFakGMRcfbVZLU9Ccg03TrA3mr4Z10osOamS81PgNFeZhZpZA5w+IK0K0I0CgqMMx6hA4dJfyciz87ydlve8vlAlHj0sMUCWgF5oPEq7IQdSltVswIQaKD+0HIcANbyjD11UMSneNN9flXc6ix56b5zQd0fndAWPxI17IFN1xIUUQMwpbVMBgGAXUKPGpbNBYu0UCThxSD5pwFB1QmnTy+FEtFi1sEHI0WuCkGAXYq7JfVPQ2UQchwGgYeKpGeG4/vRFe+iC8Vx/eiBCI4uKYlZWuKNDgBONFEFPogYBB5q4HxXJybp2Rjnt8pKXjEGmIKDQChXAVCaIKl3Ljhr6FJzEcuNBh5rsaKXmgwTcvK8nezz0OiBBsAk0oteXkwBfFGZDAVJqZDBvkP3JAGIaHlz09eiHEFkgYri7muT+2T7SSLgg6FAh9K6bl5n6Zv3Tjtur8iVnHjBA5P8StysOOJ9AslRGgw0EhQ04wcvp7KMbREDdUFmhKzbKplVcECUuSw81K0xC1I/FGhtW3Jy06pCYeAKZpJBZ7ySSTUlaEu+yzgE5AQOwpzkNHd04HTbol+I8Q5uy3DM6/CWmo1bBLIIr8qqAmYbUA4baeibY2i4IYzXWmlj4fuqDrxUJRvZcDStMk4lpiJSwxQOTHEhy9jE65fKyiaqAVXEBYD6FaEGa5ce75fCzGqz4mSBienOaw7vmk1cwzStLKiDoKi4ogbEeosLrjZauKpBCba+ts0HIcIDAK5UqhF9enmgFEJdYYJiBAA6rjHURWurcILBDixeQbZfui7FihoqVnveXGpQFa8uNSmUvCbRHQBmIhBBCIZwuFGihz26JeaKFCxQaEvKtzuU2xgGAol5V1UwXUuUFI4ABP3/AHVZ0Z5caDBNfX5umXurQ3gGtEBJOWDBumTexVWurcYIUzMBg3yCCkeZ+nY3/wBfY+6ThjmPM41KVixS41OKPKA12QbEEClgrPbVVY2gSc3O35W+J9AgBNRiKgff2QYEoXXNgnMU3CiB1sxkgQlpC9Tgm5uG1rebTHf5R4kQNFTYLImIropsLZD1KBiGaiquhS8rEGQppXyREHUCYj8ts/3FSPH5eqXlpd0Q+ZQcl4Doh8ynX8PyCegQwwUH71RKoFRIN5aZ6rLjRMhZMz0/U8rcMzr8KNoaEiqCsjI83adhkNUy6QBOibhRARb+lyPHDBU/2gQn5drKOHSnshw2oEaI6I6v2GiagyrwMiPyg6uELqBHjUsMfJByNGItnr+5oUtLl5oPErsrLl58ytaA0M7P2Oux3QRsq0CgQosk3lOWdU051FkTs5zWHd80Czk1JStbnBChUOOS1oDgRZB18EFZ/EIDW0ItXL1TszMBgqcchqseLFLjUoLhqiJCgkjEKIOsQnntDwUUQMTPd8QuMwUUQdKpInHwXVEA509rwVIS6ogZYuDA+KiiAEdSCoogLCP+QfuSNxM9kdVFEAZbBHUUQd4YeyeqTnj2z+5LiiAC2ZIdlcUQd5j9Gtb8vosmHioog0G4KrD/AJWqKIO8XPd8fRWkV1RBoBKTGJ8FFEGPENz1W1wwdgKKIGXYJTiR/wAZ8F1RBiJ6XwUUQHlD/lP/AF9Ql+Knt+AUUQAle8tuDgoogTj4u6+yyyuKINrho7ARZruO6FcUQK8TPYHUeSy1FEBIOKelT2/A+iiiBWfPbPh5BLqKIGpc2UUUQf/Z'} 
          bio={'Zaspan debel poln kruha in veselja'} 
          location={'Amerika '} 
          school={'srednja šola nekje bogu za hrbtom'} 
          work={'spanje'} />}
          </div>
        )}
      </div>
        <SideBar_Contacts />
      </div>
    </div>
  );
}