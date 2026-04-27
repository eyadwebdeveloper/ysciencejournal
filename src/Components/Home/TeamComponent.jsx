import React from "react";
import TeamCard from "./TeamCard";
import AhmedAbdElHamid from "../../images/team/ahmed-abd_elhamid.png";
import KarimTarek from "../../images/team/kareem-tarek.png";
import FaridaSaid from "../../images/team/farida-said.png";
import AnasMamdouh from "../../images/team/anas-mamdouh.png";
import DoniaMahmoud from "../../images/team/donia-mahmoud.png";
import JanaAhmed from "../../images/team/jana-ahmed.png";
import KenzaDouche from "../../images/team/kenza-douche.png";
import SrilekaKarthikeyan from "../../images/team/srileka-karthikeyan.png";
import MohabAbdelrahman from "../../images/team/mohab-abdelrahman.png";
import IbrahimYasser from "../../images/team/ibrahim-yasser.png";
import MomenAshraf from "../../images/advisory/momen-ashraf.png";
import MoemenWael from "../../images/advisory/moemen-wael.jpeg";
import MazenAbdelsttar from "../../images/advisory/mazen-abdelsttar.png";
import GasserAlwasify from "../../images/advisory/gasser-elwasify.jpeg";
import SalmaAlkosha from "../../images/advisory/salma-alkosha.png";
import AkmalHashad from "../../images/advisory/akmal-hashad.jpeg";
import OmarAboolo from "../../images/advisory/omar-aboolo.png";
import AhmedAyman from "../../images/advisory/ahmed-ayman.jpg";
import AhmedMoussa from "../../images/advisory/ahmed-moussa.jpeg";
import MohanadElagan from "../../images/advisory/mohanad-elagan.jpg";
import ShehabShiref from "../../images/advisory/shehab-sherif.jpg";
import AbdelrahmanAbdelwahab from "../../images/advisory/abdelrahman-abdelwahab.png";
import RadwaAshraf from "../../images/advisory/radwa-ashraf.jpeg";
import MikhaelMounay from "../../images/advisory/mikahel-mounay.jpg";
import MohamedAbdelmeguid from "../../images/advisory/mohamed-abdelmeguid.jpg";
import MohamedAbdElHamid from "../../images/advisory/mohamed-abd_elhamid.jpg";
import MohamedMashhour from "../../images/advisory/mohamed-mashour.jpg";

function TeamComponent() {
  return (
    <React.Fragment>
      <section className="team content">
        <div className="team-buttons">
          <button id="team-btn" className="active-team">
            <i className="fa-solid fa-users"></i>
            <h3>Executive team</h3>
            <p>
              As the saying goes: Behind every great journal, a great team.
              That's how it goes…. I guess?
            </p>
          </button>
          <button id="advisory-btn">
            <i className="fa-solid fa-hands-holding-child"></i>
            <h3>Advisory team</h3>
            <p>It always seems impossible until it is done.</p>
          </button>
        </div>
        <div className="team-cards">
          <TeamCard
            frontImage={AhmedAbdElHamid}
            frontName="Ahmed Abd El-Hamid"
            frontTitle="President"
            frontSocialLinks={[
              {
                url: "https://www.facebook.com/ahmed.saifeldeen.712",
                iconClass: "fa-brands fa-facebook",
              },
              {
                url: "https://www.instagram.com/ahmed.saif.d7/",
                iconClass: "fa-brands fa-instagram",
              },
              {
                url: "mailto:ahmedsaifeldeen1314@gmail.com",
                iconClass: "fa-solid fa-envelope",
              },
            ]}
            backImage={MoemenWael}
            backName="Moemen Wael"
            backTitle="Former Co-President"
            backSocialLinks={[
              {
                url: "https://www.facebook.com/moemenn.wael",
                iconClass: "fa-brands fa-facebook",
              },
              {
                url: "https://www.instagram.com/moemenn_wael/",
                iconClass: "fa-brands fa-instagram",
              },
              { url: "", iconClass: "fa-solid fa-envelope" },
            ]}
          />
          <TeamCard
            frontImage={KarimTarek}
            frontName="Karim Tarek"
            frontTitle="Vice-President"
            frontSocialLinks={[
              {
                url: "https://www.facebook.com/share/1UEHpSbhPM/",
                iconClass: "fa-brands fa-facebook",
              },
              {
                url: "https://www.instagram.com/karimtarek194?igsh=MWUzd2QzcG52N251cg==",
                iconClass: "fa-brands fa-instagram",
              },
              {
                url: "mailto:kt31727@gmail.com",
                iconClass: "fa-solid fa-envelope",
              },
            ]}
            backImage={GasserAlwasify}
            backName="Gasser Elwasefi"
            backTitle="Former Co-President"
            backSocialLinks={[
              {
                url: "https://www.facebook.com/gasser45123",
                iconClass: "fa-brands fa-facebook",
              },
              {
                url: "https://instagram.com/gasser45123/",
                iconClass: "fa-brands fa-instagram",
              },
              { url: "", iconClass: "fa-solid fa-envelope" },
            ]}
          />
          <TeamCard
            frontImage={FaridaSaid}
            frontName="Farida Said"
            frontTitle="Vice-President"
            frontSocialLinks={[
              {
                url: "https://www.facebook.com/share/15f2FiHCTd/",
                iconClass: "fa-brands fa-facebook",
              },
              {
                url: "https://www.instagram.com/faridaa_said06?igsh=YXozbGQwMTV1OHNl",
                iconClass: "fa-brands fa-instagram",
              },
              {
                url: "mailto:sosohazemkosha@gmail.com",
                iconClass: "fa-solid fa-envelope",
              },
            ]}
            backImage={AkmalHashad}
            backName="Akmal Hashad"
            backTitle="Former Editor in Chief"
            backSocialLinks={[
              {
                url: "https://www.facebook.com/Akmal.Hashad",
                iconClass: "fa-brands fa-facebook",
              },
              {
                url: "https://instagram.com/akmal_hashad/",
                iconClass: "fa-brands fa-instagram",
              },
              { url: "", iconClass: "fa-solid fa-envelope" },
            ]}
          />
          <TeamCard
            frontImage={AnasMamdouh}
            frontName="Anas Mamdouh"
            frontTitle="Research-Administrator"
            frontSocialLinks={[
              {
                url: "https://www.facebook.com/omar.hany.7927408?mibextid=ZbWKwL",
                iconClass: "fa-brands fa-facebook",
              },
              {
                url: "https://www.instagram.com/omar_aboolo?igsh=MWRidGRmcXFxYmlkbQ==",
                iconClass: "fa-brands fa-instagram",
              },
              {
                url: "mailto:elwasifianas@gmail.com",
                iconClass: "fa-solid fa-envelope",
              },
            ]}
            backImage={AhmedAyman}
            backName="Ahmed Ayman"
            backTitle="Former Vice-President"
            backSocialLinks={[
              {
                url: "https://www.facebook.com/profile.php?id=100025970328789",
                iconClass: "fa-brands fa-facebook",
              },
              {
                url: "https://www.instagram.com/a7med_ayman1.0.0/",
                iconClass: "fa-brands fa-instagram",
              },
              {
                url: "mailto:gadallahahmed111@gmail.com",
                iconClass: "fa-solid fa-envelope",
              },
            ]}
          />
          <TeamCard
            frontImage={DoniaMahmoud}
            frontName="Donia Mahmoud"
            frontTitle="Research-Administrator"
            frontSocialLinks={[
              {
                url: "https://www.facebook.com/share/1AVgSMKBSe/",
                iconClass: "fa-brands fa-facebook",
              },
              {
                url: "https://www.instagram.com/donismahmoud1?igsh=MTZhOGJja25wY3I3eQ==",
                iconClass: "fa-brands fa-instagram",
              },
              {
                url: "mailto:donismahmoud1@gmail.com",
                iconClass: "fa-solid fa-envelope",
              },
            ]}
            backImage={AhmedMoussa}
            backName="Ahmed Moussa"
            backTitle="Former Managing Researcher"
            backSocialLinks={[
              {
                url: "https://www.facebook.com/people/Ahmed-Moussa/100014522744793/",
                iconClass: "fa-brands fa-facebook",
              },
              {
                url: "https://instagram.com/ahmedmoussa107/",
                iconClass: "fa-brands fa-instagram",
              },
              { url: "", iconClass: "fa-solid fa-envelope" },
            ]}
          />
          <TeamCard
            frontImage={JanaAhmed}
            frontName="Jana Ahmed"
            frontTitle="Research-Administrator"
            frontSocialLinks={[
              {
                url: "https://www.facebook.com/share/163zBknHZS/",
                iconClass: "fa-brands fa-facebook",
              },
              {
                url: "https://www.instagram.com/_jana_ahmed_26?igsh=MXMxd2V1a2l4MGJhNw==",
                iconClass: "fa-brands fa-instagram",
              },
              {
                url: "mailto:Janaahmedrt@gmail.com",
                iconClass: "fa-solid fa-envelope",
              },
            ]}
            backImage={MohanadElagan}
            backName="Mohanad Elagan"
            backTitle="Former Vice-President & Website Manager"
            backSocialLinks={[
              {
                url: "https://www.facebook.com/mohanad.elagan1/",
                iconClass: "fa-brands fa-facebook",
              },
              {
                url: "https://www.instagram.com/mohanadelagan/",
                iconClass: "fa-brands fa-instagram",
              },
              {
                url: "mailto:mohanad.elagan1@gmail.com",
                iconClass: "fa-solid fa-envelope",
              },
            ]}
          />
          <TeamCard
            frontImage={IbrahimYasser}
            frontName="Ibrahim Yasser"
            frontTitle="Competition Director"
            frontSocialLinks={[
              {
                url: "https://www.facebook.com/share/1ACpBNXbpZ/",
                iconClass: "fa-brands fa-facebook",
              },
              {
                url: "https://www.instagram.com/ibrahiiiiim22?igsh=eHFzZW9yNzZicWIx",
                iconClass: "fa-brands fa-instagram",
              },
              {
                url: "mailto:ibyasser207@gmail.com",
                iconClass: "fa-solid fa-envelope",
              },
            ]}
            backImage={ShehabShiref}
            backName="Shehab Shiref"
            backTitle="Former President"
            backSocialLinks={[
              {
                url: "https://www.facebook.com/profile.php?id=100011547932209",
                iconClass: "fa-brands fa-facebook",
              },
              {
                url: "https://www.instagram.com/shehabsherif112/",
                iconClass: "fa-brands fa-instagram",
              },
              {
                url: "mailto:shehabsherif112@gmail.com",
                iconClass: "fa-solid fa-envelope",
              },
            ]}
          />
          <TeamCard
            frontImage={KenzaDouche}
            frontName="Kenza douche"
            frontTitle="International Director of Outreach"
            frontSocialLinks={[
              {
                url: "https://www.instagram.com/kenza.douche?igsh=Y2FsejVweDAxN2R2",
                iconClass: "fa-brands fa-instagram",
              },
              {
                url: "mailto:kenza.douche40@gmail.com",
                iconClass: "fa-solid fa-envelope",
              },
            ]}
            backImage={MomenAshraf}
            backName="Mo'men Ashraf"
            backTitle="President"
            backSocialLinks={[
              {
                url: "https://www.facebook.com/momen.ashraf.3726?mibextid=ZbWKwL",
                iconClass: "fa-brands fa-facebook",
              },
              {
                url: "https://www.instagram.com/momen4653/",
                iconClass: "fa-brands fa-instagram",
              },
              {
                url: "mailto:momen.ashraf442006@gmail.com",
                iconClass: "fa-solid fa-envelope",
              },
            ]}
          />
          <TeamCard
            frontImage={SrilekaKarthikeyan}
            frontName="Srileka Karthikeyan"
            frontTitle="International Director of Outreach"
            frontSocialLinks={[
              {
                url: "mailto:srileka.karthikeyan@gmail.com",
                iconClass: "fa-solid fa-envelope",
              },
            ]}
            backImage={MazenAbdelsttar}
            backName="Mazen Abdelsttar"
            backTitle="Vice-President"
            backSocialLinks={[
              {
                url: "https://www.facebook.com/profile.php?id=100075129071556&mibextid=ZbWKwL",
                iconClass: "fa-brands fa-facebook",
              },
              {
                url: "https://www.instagram.com/mazen.m.elmahdy?igsh=b3E4azI5YjJjbjhm",
                iconClass: "fa-brands fa-instagram",
              },
              {
                url: "mailto:mazenelmahdy11@gmail.com",
                iconClass: "fa-solid fa-envelope",
              },
            ]}
          />

          <TeamCard
            frontImage={MohabAbdelrahman}
            frontName="Mohab Abdelrahman"
            frontTitle="Production Team Head"
            frontSocialLinks={[
              {
                url: "https://www.facebook.com/profile.php?id=61551991015814",
                iconClass: "fa-brands fa-facebook",
              },
              {
                url: "https://www.instagram.com/mohabstudent/",
                iconClass: "fa-brands fa-instagram",
              },
              {
                url: "mailto:gomohab08@gmail.com",
                iconClass: "fa-solid fa-envelope",
              },
            ]}
            backImage={SalmaAlkosha}
            backName="Salma Alkosha"
            backTitle="Vice-President"
            backSocialLinks={[
              {
                url: "https://www.facebook.com/salmahazem.alkosha.94?mibextid=LQQJ4d",
                iconClass: "fa-brands fa-facebook",
              },
              {
                url: "https://www.instagram.com/salmalkosha?igsh=a2Juc2U1NDd2eXEx&utm_source=qr",
                iconClass: "fa-brands fa-instagram",
              },
              {
                url: "mailto:sosohazemkosha@gmail.com",
                iconClass: "fa-solid fa-envelope",
              },
            ]}
          />
          <TeamCard
            frontImage={MohamedMashhour}
            frontName="Mohamed Mashhour"
            frontTitle="Editor in Cheif"
            frontSocialLinks={[
              {
                url: "https://www.facebook.com/profile.php?id=100008599171572a",
                iconClass: "fa-brands fa-facebook",
              },
              {
                url: "https://www.instagram.com/mohamedmashhour1/",
                iconClass: "fa-brands fa-instagram",
              },
              {
                url: "mailto:mohamedi.mashhour1@gmail.com",
                iconClass: "fa-solid fa-envelope",
              },
            ]}
            backImage={MohamedAbdElHamid}
            backName="Mohamed Abd El-Hamid"
            backTitle="Former Co-President"
            backSocialLinks={[
              {
                url: "https://web.facebook.com/mohamedsaifeldee/",
                iconClass: "fa-brands fa-facebook",
              },
              {
                url: "https://www.instagram.com/mohamedsaifeldee/",
                iconClass: "fa-brands fa-instagram",
              },
              {
                url: "mailto:mohamedsaiftyr@gmail.com",
                iconClass: "fa-solid fa-envelope",
              },
            ]}
          />
          <TeamCard
            frontImage={null}
            frontName=""
            frontTitle=""
            frontSocialLinks={[]}
            backImage={OmarAboolo}
            backName="Omar Aboolo"
            backTitle="Research-Administrator"
            backSocialLinks={[
              {
                url: "https://www.facebook.com/omar.hany.7927408?mibextid=ZbWKwL",
                iconClass: "fa-brands fa-facebook",
              },
              {
                url: "https://www.instagram.com/omar_aboolo?igsh=MWRidGRmcXFxYmlkbQ==",
                iconClass: "fa-brands fa-instagram",
              },
              {
                url: "mailto:omaraboolo924@gmail.com",
                iconClass: "fa-solid fa-envelope",
              },
            ]}
          />
          <TeamCard
            frontImage={null}
            frontName=""
            frontTitle=""
            frontSocialLinks={[]}
            backImage={AbdelrahmanAbdelwahab}
            backName="Abdelrahman Abdelwahab"
            backTitle="Editor in Chief"
            backSocialLinks={[
              {
                url: "https://www.facebook.com/seco.ahmed.90?mibextid=LQQJ4d",
                iconClass: "fa-brands fa-facebook",
              },
              {
                url: "https://www.instagram.com/abdelrhman_ahmed__sayed?igsh=emFqYm0ya3plNXE4&utm_source=qr",
                iconClass: "fa-brands fa-instagram",
              },
              {
                url: "mailto:abdelrahman.a.abdelaziz28@gmail.com",
                iconClass: "fa-solid fa-envelope",
              },
            ]}
          />
        </div>
      </section>
    </React.Fragment>
  );
}

export default TeamComponent;
