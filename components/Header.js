const brand = {
  home: 'https://static.insta360.com/assets/mall/ic_header_shoppingbag@2x.png',
  eye: 'https://static.insta360.com/assets/mall/eye@2x.png',
  logo: 'https://www.insta360.com/public/images/common/logo-text-beta@2x.png'
}

const links = [
  ['Home', '#'],
  ['About', '#']
]

export default () => (
  <div className="header">
    <div className="container">
      <a href="#" alt="" className="header-home" target="_blank">
        <div className="home-pic">
          <img src={brand.eye} alt="" />
        </div>
      </a>
      <a href="https://www.insta360.com" target="_blank" className="header-brand">Insta360</a>
      <ul className="menu">
        {
          links.map((v, k) =>
            <li key={k} className="item">
              <a href={v[1]}>{v[0]}</a>
            </li>
          )
        }
      </ul>
    </div>
    <style jsx>{`
      .header{
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 64px;
          z-index: 1;      
          border-bottom: 1px #f2f2f2 solid;            
          background: #fff;          
      }

      .header-home {
          display: block;
          float: left;
          margin: 16px 16px 16px 0;
          padding: 4px;
          line-height: 0;
          background-color: #ffd200;
          border-radius: 1.5px;
          overflow: hidden;
          height: 32px;
      }    

      .header-home .home-pic{
          transition: transform ease-in-out .25s, -webkit-transform ease-in-out .25s;       
      }  

      .header-home .home-pic img {
          width: 24px;
          display: block;
          margin-bottom: 8px;
      }       

      .header-brand {
          display: inline-block;
          height: 64px;
          line-height: 64px;          
          width: 72px;
          overflow: hidden;
          font-weight: bold;
      }

      .header-brand img{
          width: 100%;          
      }      

      ul.menu {
          display: inline-block;
          margin: 0;
          padding-left: 24px;
          list-style: none;
          overflow: hidden;
      }

      ul.menu li.item{
          float: left;
          position: relative;
          padding: 0;
          display: block;
          vertical-align: middle;
          margin-bottom: 0;
          transition: all ease-in-out 0.25s;        
      }

      ul.menu li.item a{
          text-decoration: none;
          overflow: hidden;                            
          position: relative;
          display: block;
          padding: 0 12px;
          font-size: 14px;
          line-height: 64px;
          color: #2d2d2d;
          transition: transform ease-in-out 0.25s;               
      }      
    `}</style>
  </div>
)