import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const Research: React.FC = () => {
    return (
        <>
        <NavBar/>
        <h1 style={{ textAlign: 'center', marginTop:"7px" }}>Innovation</h1>
        <div style={{marginLeft:"20px", marginRight:"20px"}}>
            <h2>User Group Choice:</h2>
            <p>The broad user group for my Epic Project is primary-school students. This group is suitable as the dice will enhance student engagement by making maths lessons more interactive. It will aid them in learning important maths topics like probability and statistics by incorporating fun and engaging elements into the learning experience.</p>
            <h2>User group description:</h2>
            <p>According to the Central Statistics Office, there were 561,411 students enrolled in secondary schools in 2021 <a href="https://www.cso.ie/en/releasesandpublications/ep/p-mip/measuringirelandsprogress2020/education/">[1]</a>. It is mandatory that all of these student’s study math. However, 69% of primary school students rank maths as the least interesting subject <a href="https://cslstudy.ie/">[2]</a>. Often students can be bored in maths classes. Not engaging with maths in primary school can cause students to miss out on a lot of the core concepts, making it difficult to progress in secondary school. Research shows that children universally favoured interactive maths lessons rather than learning from textbooks. <a href="https://ncca.ie/media/5938/consultation_with_children_pmc.pdf">[3]</a> Incorporating hands-on, entertaining mathematical learning methods into the classroom helps students engage with the lessons. This product aims to increase interactive elements across numerous maths topics in all classes. </p>
            <div style={{ textAlign: 'center' }}>
                <img src="./Figure1.png" alt="Figure 1" />
            </div>
            <p>Primary school students from all classes would be able to use this product and it can be used for many topics in the primary school maths curriculum. Students from third class onwards begin studying Chance <a href="https://www.curriculumonline.ie/getmedia/484d888b-21d4-424d-9a5c-3d849b0159a1/PrimaryMathematicsCurriculum_EN.pdf">[4]</a>. This product, along with the accompanying website, would increase interactivity in this topic.  The product adds an element of fun to maths classes which makes learning maths less of a chore. The dice has a number of different face options from six-sided dice to twenty-sided dice. This gives students the opportunity to advance to more difficult probabilities which helps target students in all classes. From junior infants to second class, the dice would help cover a number of topics from learning numbers to performing mathematical operations. It makes maths more accessible to students with diverse learning styles and abilities. . Some students are visual or kinaesthetic learners and learning from teachers talking is very difficult. Its use is intuitive, like a regular dice, and it does not need a high technological ability to be used.</p>
            <h2>Segmentation method:</h2>
            <p>I have chosen to segment my market using demographic. I will cater to the demographic of primary school students of age five to twelve who are studying maths. I will focus on students in Connacht as this is where I am from so I have access to the schools. </p>
            <h2>User Persona:</h2>
            <img src="./userPersona.png" alt="User Persona" style={{ width: "100%", textAlign: 'center', marginBottom: "20px"}}/>
            <h2>Marketing Video:</h2>
            <video controls style={{width:"100%"}} >
                <source src="./Marketing.mp4" type="video/mp4"></source>
            </video>
            <h2>Refrences</h2>
            <p>[1] - www.cso.ie. (n.d.). Education - CSO - Central Statistics Office. [online] Available at: <a href="https://www.cso.ie/en/releasesandpublications/ep/p-mip/measuringirelandsprogress2020/education/">https://www.cso.ie/en/releasesandpublications/ep/p-mip/measuringirelandsprogress2020/education/.</a><br/>
                [2] - CSL. (n.d.). Home. [online] Available at: <a href="https://cslstudy.ie/">https://cslstudy.ie/</a> [Accessed 12 Feb. 2024]. <br/>
                [3] - Leavey, Dr.A., Hourigan, Dr.M., Harmon, Dr.M., Treacey, Dr.M. and Fitzpatrick, M. (2023). Primary Mathematics Curriculum Consultation: Consultation with Children FINAL REPORT. [online] Available at: <a href="https://ncca.ie/media/5938/consultation_with_children_pmc.pdf">https://ncca.ie/media/5938/consultation_with_children_pmc.pdf [Accessed 12 Feb. 2024] </a>. <br/>
                [4] NCCA (2023). Primary Mathematics Curriculum For Primary and Special Schools Prepared by the National Council for Curriculum and Assessment (NCCA). [online] Available at: <a href="https://www.curriculumonline.ie/getmedia/484d888b-21d4-424d-9a5c-3d849b0159a1/PrimaryMathematicsCurriculum_EN.pdf">https://www.curriculumonline.ie/getmedia/484d888b-21d4-424d-9a5c-3d849b0159a1/PrimaryMathematicsCurriculum_EN.pdf.</a>

            </p>
        </div>
        <Footer/>
        </>
    
    );
};

export default Research;