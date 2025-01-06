import React from "react";

export interface UserInfoProps {
  id: number
  name: string;  
  imgPath: string;
}

// String name, String imgPath
export const UserInfo: React.FC<UserInfoProps> = ({ id, name, imgPath }) => {
  return (
    <div
      className="x9f619 x78zum5 x1r8uery xdt5ytf x1iyjqo2 xs83m0k x150jy0e x1e558r4 xjkvuk6 x1iorvi4 xnpuxes"
      role="listitem"
      style={{ maxWidth: "250px", minWidth: "200px" }}
    >
      <div className="xh8yej3">
        <div className="html-div xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x78zum5 x1n2onr6 xh8yej3">
          <div
            className="x1n2onr6 x1ja2u2z x1jx94hy x8cjs6t x1ch86jh x80vd3b xckqwgs x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x1qpq9i9 xdney7k xu5ydu1 xt3gfkd x9f619 xh8yej3 x6ikm8r x10wlt62 xquyuld"
            style={{
              borderRadius: "max(0px, min(var(--card-corner-radius), calc((100vw - 4px - 100%) * 9999))) / var(--card-corner-radius)",
            }}
          >
            <div className="x1vrad04 x1n2onr6 xh8yej3">
              <a
                className="x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz x1heor9g x1sur9pj xkrqix3 x1s688f x1ey2m1c x9f619 x1lliihq xds687c x17qophe x10l6tqk x13vifvy"
                href="/friends/requests/?profile_id=100001362306231"
                role="link"
                tabIndex={0}
              >
                <img
                  alt="Profile Picture"
                  className="x5yr21d xl1xv1r x10l6tqk xh8yej3"
                  referrerPolicy="origin-when-cross-origin"
                  src={imgPath}              
                />
              </a>
              <div className="x1ey2m1c xlg9a9y xjm9jq1 x10l6tqk xh8yej3"></div>
            </div>

            <div className="xz9dl7a xn6708d xsag5q8 x1ye3gou">
              <div>
                <a
                  aria-hidden="false"
                  className="x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz x1heor9g x1sur9pj xkrqix3 x1s688f"
                  href="/friends/requests/?profile_id=100001362306231"
                  role="link"
                  tabIndex={0}
                >
                  <div className="x12nagc x1gslohp">
                    <span
                      className="x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x xudqn12 x3x7a5m x1lkfr7t x1lbecb7 x1s688f xzsf02u"
                      dir="auto"
                    >
                      <span className="x1lliihq x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft x1j85h84">{name}</span>
                    </span>
                  </div>
                </a>
              </div>

              <div className="x6s0dn4 x78zum5 x1fgtraw x1120s5i xh8yej3"></div>

              <div className="xh8yej3">
                <div
                  aria-label="Potrdi"
                  className="x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x87ps6o x1lku1pv x1a2a7pz x9f619 x3nfvp2 xdt5ytf xl56j7k x1n2onr6 xh8yej3"
                  role="button"
                  tabIndex={0}
                >
                  <div
                    role="none"
                    className="x1ja2u2z x78zum5 x2lah0s x1n2onr6 xl56j7k x6s0dn4 xozqiw3 x1q0g3np xi112ho x17zwfj4 x585lrc x1403ito x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xn6708d x1ye3gou xtvsq51 x1r1pt67"
                  >
                    <div className="x6s0dn4 x78zum5 xl56j7k x1608yet xljgi0e x1e0frkt">
                      <div
                        role="none"
                        className="x9f619 x1n2onr6 x1ja2u2z x193iq5w xeuugli x6s0dn4 x78zum5 x2lah0s x1fbi1t2 xl8fo4v"
                      >
                        <span
                          className="x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x xudqn12 x3x7a5m x6prxxf xvq8zen x1s688f xtk6v10"
                          dir="auto"
                        >
                          <span className="x1lliihq x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft">Potrdi</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  aria-label="Izbriši"
                  className="x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x87ps6o x1lku1pv x1a2a7pz x9f619 x3nfvp2 xdt5ytf xl56j7k x1n2onr6 xh8yej3"
                  role="button"
                  tabIndex={0}
                >
                  <div
                    role="none"
                    className="x1ja2u2z x78zum5 x2lah0s x1n2onr6 xl56j7k x6s0dn4 xozqiw3 x1q0g3np xi112ho x17zwfj4 x585lrc x1403ito x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xn6708d x1ye3gou xtvsq51 x1r1pt67"
                  >
                    <div className="x6s0dn4 x78zum5 xl56j7k x1608yet xljgi0e x1e0frkt">
                      <div
                        role="none"
                        className="x9f619 x1n2onr6 x1ja2u2z x193iq5w xeuugli x6s0dn4 x78zum5 x2lah0s x1fbi1t2 xl8fo4v"
                      >
                        <span
                          className="x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x xudqn12 x3x7a5m x6prxxf xvq8zen x1s688f xtk6v10"
                          dir="auto"
                        >
                          <span className="x1lliihq x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft">Izbriši</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="x78zum5 x1xmf6yo xdt5ytf"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
