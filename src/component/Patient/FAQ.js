import React, { Component } from "react";
import ReactDOM from "react-dom";


import Header from '../Header'

class FAQ extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            pageName:'/',
            showAdd:'personal',
            patientDetails: {}
        };
        this.addAction = this.addAction.bind(this);
    }
    navigate(url) {
        this.props.history.push('/patient/' + url);
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({pageName:nextProps.match.params.id});
    }
    addAction(type, Pdetails) {
        
    }
    render() {
        return (
          <div className="faqdata">
          	<main className="faqdat">

			  <input id="tab1" type="radio" name="tabs" defaultChecked/>
			  <label htmlFor="tab1">Smoking</label>

			  <input id="tab2" type="radio" name="tabs" />
			  <label htmlFor="tab2">Blood Pressure </label>

			  <input id="tab3" type="radio" name="tabs"/>
			  <label htmlFor="tab3">Diabetes</label>

			  <section id="content1">
			    <div>
	          		<h2>How Does Smoking During Pregnancy Harm My Health and My Baby?</h2>
					<p>Most people know that smoking causes cancer, heart disease, and other major health problems. Smoking during pregnancy causes additional health problems, including&nbsp;<a href="https://www.cdc.gov/reproductivehealth/maternalinfanthealth/pretermbirth.htm">premature birth</a>&nbsp;(being born too early), certain&nbsp;<a href="https://www.cdc.gov/ncbddd/birthdefects/index.html">birth defects</a>, and&nbsp;<a href="https://www.cdc.gov/reproductivehealth/maternalinfanthealth/infantmortality.htm">infant death</a>.</p>
					<ul style={{marginLeft: '3%'}}>
						<li>Smoking makes it harder for a woman to get pregnant.</li>
						<li>Women who smoke during pregnancy are more likely than other women to have a miscarriage.</li>
						<li>Smoking can cause&nbsp;<a href="http://www.nlm.nih.gov/medlineplus/ency/article/001485.htm">problems with the placenta</a>&mdash;the source of the baby&rsquo;s food and oxygen during pregnancy. For example, the placenta can separate from the womb too early, causing bleeding, which is dangerous to the mother and baby.</li>
						<li>Smoking during pregnancy can cause a baby to be&nbsp;<a href="https://www.cdc.gov/reproductivehealth/maternalinfanthealth/pretermbirth.htm">born too early</a>or to have low birth weight&mdash;making it more likely the baby will be sick and have to stay in the hospital longer. A few babies may even die.</li>
						<li>Smoking during and after pregnancy is a risk factor of&nbsp;<a href="https://www.cdc.gov/sids/index.htm">Sudden Infant Death Syndrome (SIDS)</a>. SIDS is an infant death for which a cause of the death cannot be found.</li>
						<li>Babies born to women who smoke are more likely to have certain birth defects, like a&nbsp;<a href="https://www.cdc.gov/ncbddd/birthdefects/cleftlip.html">cleft lip or cleft palate</a>.</li>
					</ul>
          		</div>
          		<br/>
          		<div>
	          		<h2>What are e-cigarettes? Are they safer than regular cigarettes in pregnancy?</h2>
					<p>Electronic cigarettes (also called electronic nicotine delivery systems or e-cigarettes) come in different sizes and shapes, including &ldquo;pens,&rdquo; &ldquo;mods,&rdquo; (i.e., these types are modified by the user) and &ldquo;tanks.&rdquo; Most e-cigarettes contain a battery, a heating device, and a cartridge to hold liquid. The liquid typically contains nicotine, flavorings, and other chemicals. The battery-powered device heats the liquid in the cartridge into an aerosol that the user inhales.</p>
					<p>Although the aerosol of e-cigarettes generally has fewer harmful substances than cigarette smoke, e-cigarettes and other products containing nicotine are not safe to use during pregnancy. Nicotine is a health danger for pregnant women and developing babies and can damage a developing baby&rsquo;s brain and lungs. Also, some of the flavorings used in e-cigarettes may be harmful to a developing baby.&nbsp;<a href="https://www.cdc.gov/reproductivehealth/maternalinfanthealth/tobaccousepregnancy/e-cigarettes-pregnancy.htm">Learn more about e-cigarettes and pregnancy</a></p>
	          	</div>
	          	<br/>
	          	<div>
	          		<h2>What Are the Benefits of Quitting?</h2>
					<p>Quitting smoking will help you feel better and provide a healthier environment for your baby.</p>
					<p>When you stop smoking</p>
					<ul style={{marginLeft: '3%'}}>
					<li>Your baby will get more oxygen, even after just one day of not smoking.</li>
					<li>There is less risk that your baby will be born too early.</li>
					<li>There is a better chance that your baby will come home from the hospital with you.</li>
					<li>You will be less likely to develop heart disease, stroke, lung cancer, chronic lung disease, and other smoke-related diseases.</li>
					<li>You will be more likely to live to know your grandchildren.</li>
					<li>You will have more energy and breathe more easily.</li>
					<li>Your clothes, hair, and home will smell better.</li>
					<li>Your food will taste better.</li>
					<li>You will have more money that you can spend on other things.</li>
					<li>You will feel good about what you have done for yourself and your baby.</li>
					</ul>
	          	</div>
	          	<br/>
	          	 <div>
	          		<h2>How Does Other People&rsquo;s Smoke (Secondhand Smoke) Harm My Health and My Child&rsquo;s Health?</h2>
					<p>Breathing other people&rsquo;s smoke make children and adults who do not smoke sick. There is no safe level of breathing others people&rsquo;s smoke.</p>
					<ul style={{marginLeft: '3%'}}>
					<li>Pregnant women who breathe other people&rsquo;s cigarette smoke are more likely to have a baby who weighs less.</li>
					<li>Babies who breathe in other people&rsquo;s cigarette smoke are more likely to have ear infections and more frequent asthma attacks.</li>
					<li>Babies who breathe in other people&rsquo;s cigarette smoke are more likely to die from&nbsp;<a href="https://www.cdc.gov/sids/">Sudden Infant Death Syndrome (SIDS)</a>. SIDS is an infant death for which a cause of the death cannot be found.</li>
					</ul>
          		</div>
          		<br/>
          		<div>
	          		<h2>How Can I Quit Smoking Before or During Pregnancy?</h2>
					<p>There are many&nbsp;<a href="https://www.webmd.com/smoking-cessation/rm-quiz-stop-smoking">smoking cessation</a>&nbsp;programs available to help you quit smoking. Ask your&nbsp;<a href="https://www.webmd.com/health-insurance/default.htm">health care</a>&nbsp;provider for more information about these programs.</p>
					<p>Here are some tips that may help you kick the habit:</p>
					<ul style={{marginLeft: '3%'}}>
					<li>Hide your matches, lighters, and ashtrays.</li>
					<li>Designate your home a non-smoking area.</li>
					<li>Ask people who smoke not to smoke around you.</li>
					<li>Drink fewer caffeinated beverages;&nbsp;<a href="https://www.webmd.com/diet/caffeine-myths-and-facts">caffeine</a>&nbsp;may stimulate your urge to smoke. Also avoid alcohol, as it may also increase your urge to smoke and can be harmful to your baby.</li>
					<li>Change your habits connected with smoking. If you smoked while driving or when feeling stressed, try other activities to replace smoking.</li>
					<li>Keep mints or gum (preferably sugarless) on hand for those times when you get the urge to smoke.</li>
					<li>Stay active to keep your mind off smoking and help relieve tension: take a walk,&nbsp;<a href="https://www.webmd.com/fitness-exercise/default.htm">exercise</a>, read a book, or try a new a hobby.</li>
					<li>Look for support from others. Join a support group or&nbsp;<a href="https://www.webmd.com/smoking-cessation/quit-smoking-11/how-to-quit-smoking">smoking cessation</a>&nbsp;program.</li>
					</ul>
					<h2>Do not go to places where many people are smoking such as bars or clubs, and smoking sections of restaurants</h2>
	          	</div>
	          	<br/>
			  </section>

			  <section id="content2">
			  	<div>
				    <h3>What are the types of high blood pressure during pregnancy?</h3>
					<p>Sometimes high blood pressure is present before pregnancy. In other cases, high blood pressure develops during pregnancy</p>
					<ul style={{marginLeft: '3%'}}>
					<li><strong>Gestational hypertension.</strong>Women with gestational hypertension have high blood pressure that develops after 20 weeks of pregnancy. There is no excess protein in the urine or other signs of organ damage. Some women with gestational hypertension eventually develop preeclampsia.</li>
					<li><strong>Chronic hypertension.</strong>Chronic hypertension is high blood pressure that was present before pregnancy or that occurs before 20 weeks of pregnancy. But because high blood pressure usually doesn't have symptoms, it might be hard to determine when it began.</li>
					<li><strong>Chronic hypertension with superimposed preeclampsia.</strong>This condition occurs in women with chronic hypertension before pregnancy who develop worsening high blood pressure and protein in the urine or other blood pressure related complications during pregnancy.</li>
					<li>Preeclampsia occurs when hypertension develops after 20 weeks of pregnancy, and is associated with signs of damage to other organ systems, including the kidneys, liver, blood or brain. Untreated preeclampsia can lead to serious &mdash; even fatal &mdash; complications for mother and baby, including development of seizures (eclampsia).</li>
					</ul>
					<p>Previously, preeclampsia was diagnosed only if a pregnant woman had high blood pressure and protein in her urine. Experts now know that it's possible to have preeclampsia without having protein in the urine.</p>
			  	</div>
			  	<br/>
			  	<div>
			  		<h3>Why is high blood pressure a problem during pregnancy?</h3>
					<p>High blood pressure during pregnancy poses various risks, including:</p>
					<ul style={{marginLeft: '3%'}}>
					<li><strong>Decreased blood flow to the placenta.</strong>If the placenta doesn't get enough blood, your baby might receive less oxygen and fewer nutrients. This can lead to slow growth (intrauterine growth restriction), low birth weight or premature birth. Prematurity can lead to breathing problems, increased risk of infection and other complications for the baby.</li>
					<li><strong>Placental abruption.</strong>Preeclampsia increases your risk of this condition in which the placenta separates from the inner wall of your uterus before delivery. Severe abruption can cause heavy bleeding, which can be life-threatening for you and your baby.</li>
					<li><strong>Intrauterine growth restriction.</strong>Hypertension might result in slowed or decreased growth of your baby (intrauterine growth restriction).</li>
					<li><strong>Injury to your other organs.</strong>Poorly controlled hypertension can result in injury to your brain, heart, lungs, kidneys, liver and other major organs. In severe cases, it can be life-threatening.</li>
					<li><strong>Premature delivery.</strong>Sometimes an early delivery is needed to prevent potentially life-threatening complications when you have high blood pressure during pregnancy.</li>
					<li><strong>Future cardiovascular disease.</strong>Having preeclampsia might increase your risk of future heart and blood vessel (cardiovascular) disease. Your risk of future cardiovascular disease is higher if you've had preeclampsia more than once or you've had a premature birth due to having high blood pressure during pregnancy.</li>
					</ul>
			  	</div>
			  	<br/>
			  	<div>
			  		<h3>How will I know if I develop hypertension during pregnancy?</h3>
					<p>Monitoring your blood pressure is an important part of prenatal care. If you have chronic hypertension, your health care provider will consider these categories for blood pressure measurements:</p>
					<ul style={{marginLeft: '3%'}}>
					<li><strong>Elevated blood pressure.</strong>Elevated blood pressure is a systolic pressure ranging from 120 to 129 millimeters of mercury (mm Hg) and a diastolic pressure below 80 mm Hg. Elevated blood pressure tends to get worse over time unless steps are taken to control blood pressure.</li>
					<li><strong>Stage 1 hypertension.</strong>Stage 1 hypertension is a systolic pressure ranging from 130 to 139 mm Hg or a diastolic pressure ranging from 80 to 89 mm Hg.</li>
					<li><strong>Stage 2 hypertension.</strong>More severe hypertension, stage 2 hypertension is a systolic pressure of 140 mm Hg or higher or a diastolic pressure of 90 mm Hg or higher.</li>
					</ul>
					<p>After 20 weeks of pregnancy, blood pressure that exceeds 140/90 mm HG &mdash; documented on two or more occasions, at least four hours apart, without any other organ damage &mdash; is considered to be gestational hypertension.</p>
			  	</div>
			  	<br/>
			  	<div>
			  		<h3>How will I know if I develop preeclampsia?</h3>
					<p>Besides high blood pressure, other signs and symptoms of preeclampsia include:</p>
					<ul style={{marginLeft: '3%'}}>
					<li>Excess protein in your urine (proteinuria) or additional signs of kidney problems</li>
					<li>Severe headaches</li>
					<li>Changes in vision, including temporary loss of vision, blurred vision or light sensitivity</li>
					<li>Upper abdominal pain, usually under your ribs on the right side</li>
					<li>Nausea or vomiting</li>
					<li>Decreased levels of platelets in your blood (thrombocytopenia)</li>
					<li>Impaired liver function</li>
					<li>Shortness of breath, caused by fluid in your lungs</li>
					</ul>
					<p>Sudden weight gain and swelling (edema) &mdash; particularly in your face and hands &mdash; often accompanies preeclampsia. But they also occur in many normal pregnancies, so weight gain and swelling aren't considered reliable signs of preeclampsia.</p>
			  	</div>
			  	<br/>
			  	<div>
			  		<h3><span >Is it safe to take blood pressure medication during pregnancy?</span></h3>
					<p ><span >Some blood pressure medications are considered safe to use during pregnancy, but angiotensin-converting enzyme (ACE) inhibitors, angiotensin II receptor blockers and renin inhibitors are generally avoided during pregnancy.</span></p>
					<p ><span >Treatment is important, however. High blood pressure puts you at risk of heart attack, stroke and other major complications. And it can be dangerous for your baby.</span></p>
					<p ><span >If you need medication to control your blood pressure during pregnancy, your health care provider will prescribe the safest medication at the most appropriate dose. Take the medication exactly as prescribed. Don't stop taking the medication or adjust the dose on your own.</span></p>	
			  	</div>
			  	<br/>
			  	<div>
					<h3 ><span>What should I do to prepare for pregnancy?</span></h3>
					<p ><span >If you have high blood pressure, schedule a preconception appointment with the health care provider who'll handle your pregnancy. Also meet with other members of your health care team, such as your family doctor or cardiologist. They'll evaluate how well you're managing your high blood pressure and consider treatment changes you might need to make before pregnancy.</span></p>
					<p ><span >If you're overweight, your health care provider might recommend losing the excess pounds before you try to conceive.</span></p>
			  	</div>
			  	<br/>
			  	<div>
			  		<h3>What can I expect during prenatal visits?</h3>
					<p>During pregnancy, you'll see your health care provider often. Your weight and blood pressure will be checked at every visit, and you might need frequent blood and urine tests.</p>
					<h3>Your health care provider will closely monitor your baby's health, as well. Frequent ultrasounds might be used to track your baby's growth and development. Fetal heart rate monitoring might be used to evaluate your baby's well-being. Your health care provider might also recommend monitoring your baby's daily movements</h3>
			  	</div>
			  	<br/>
			  	<div>
			  		<h3>What can I do to reduce the risk of complications?</h3>
					<p>Taking good care of yourself is the best way to take care of your baby. For example:</p>
					<ul style={{marginLeft: '3%'}}>
					<li><strong>Keep your prenatal appointments.</strong>Visit your health care provider regularly throughout your pregnancy.</li>
					<li><strong>Take your blood pressure medication as prescribed.</strong>Your health care provider will prescribe the safest medication at the most appropriate dose.</li>
					<li><strong>Stay active.</strong>Follow your health care provider's recommendations for physical activity.</li>
					<li><strong>Eat a healthy diet.</strong>Ask to speak with a nutritionist if you need additional help.</li>
					<li><strong>Know what's off-limits.</strong>Avoid smoking, alcohol and illicit drugs. Talk to your health care provider before taking over-the-counter medications.</li>
					</ul>
					<p>Researchers continue to study ways to prevent preeclampsia, but so far, no clear strategies have emerged. If you had a hypertensive disorder in a prior pregnancy, your doctor might recommend a daily low-dose aspirin (81 milligrams) beginning late in your first trimester.</p>
			  	</div>
			  	<br/>
			  	<div>
					<h3 ><span >What about labor and delivery?</span></h3>
					<p ><span >Your health care provider might suggest inducing labor before your due date to avoid complications. The timing of your induction is based both on how well-controlled your blood pressure is, whether you have end-stage organ damage, and whether your baby has complications, such as intrauterine growth restriction due to your hypertension.</span></p>
					<p ><span>If you have preeclampsia with severe features, you might be given medication during labor to help prevent seizures.</span></p>
			  	</div>
			  	<br/>
			  	<div>
					<h3 ><span >Will I be able to breast-feed my baby?</span></h3>
					<p ><span >Breast-feeding is encouraged for most women who have high blood pressure, even those who take medication. Discuss medication adjustments you'll need to make with your health care provider before your baby is born. Sometimes an alternate blood pressure medication is recommended.</span></p>
			  	</div>
			  	<div>
			  	</div>
			  </section>

			  <section id="content3">
			    <div>
			    	<h2>What is diabetes mellitus?</h2>
					<p><em><strong>Diabetes mellitus</strong></em>&nbsp;(also called "diabetes") is caused by a problem with&nbsp;<em><strong>insulin</strong></em>. Insulin moves&nbsp;<em><strong>glucose</strong></em>&nbsp;out of the blood and into the body&rsquo;s cells where it can be turned into energy (see the FAQ&nbsp;<a href="https://www.acog.org/Patients/FAQs/Diabetes-and-Women">Diabetes and Women</a>). Pregnancy health care providers often call diabetes that is present before pregnancy "pregestational diabetes."</p>
					<p>When the body does not make enough insulin or does not respond to it, glucose cannot get into cells and instead stays in the blood. As a result, the level of glucose in the blood increases. Over time, high blood glucose levels can damage the body and cause serious health problems, such as heart disease, vision problems, and kidney disease.</p>
			    </div>
	          	<br/>
	          	<div>
	          		<h2>How can pregestational diabetes affect my pregnancy?</h2>
					<p>If your diabetes is not managed well, you are at increased risk of several of the complications associated with diabetes. The following problems can occur in women with diabetes:</p>
					<ul style={{marginLeft: '3%'}}>
					<li>Birth defects</li>
					<li>High blood pressure</li>
					<li><em><strong>Hydramnios</strong></em>&mdash;In this condition, there is an increased amount of&nbsp;<em><strong>amniotic fluid&nbsp;</strong></em>in the amniotic sac that surrounds the baby. It can lead to&nbsp;<em><strong>preterm&nbsp;</strong></em>labor and delivery.</li>
					<li>Macrosomia (very large baby)&mdash;The baby receives too much glucose from the mother and can grow too large. A large baby can make delivery more difficult. A large baby also increases the risk of having a&nbsp;<em><strong>cesarean delivery</strong></em>.</li>
					</ul>
	          	</div>
	          	<br/>
	          	<div>
	          		<h2>How can pregestational diabetes affect my baby?</h2>
					<p>Babies born to mothers with pregestational diabetes may have problems with breathing, low glucose levels, and jaundice. Most babies do well after birth, although some may need to spend time in a special care nursery. The good news is that with proper planning and control of your diabetes, you can decrease the risk of these problems.</p>
	          	</div>
	          	<br/>
	          	<div>
	          		<h2>If I have diabetes and wish to become pregnant, is it important to tell my health care provider?</h2>
					<p>Yes, your health care provider will help you get your blood glucose level under control before you become pregnant (if it is not already). Controlling your glucose level is important because some of the birth defects caused by high glucose levels happen when the baby&rsquo;s organs are developing in the first 8 weeks of pregnancy&mdash;before you may know you are pregnant. Getting your glucose level under control may require changing your medications, diet, and exercise program.</p>
	          	</div>
	          	<br/>
	          	<div>
	          		<h2>How can I control my diabetes during pregnancy?</h2>
					<p>You can control your glucose level with a combination of eating right, exercising, and taking medications as directed by your health care provider. You may need to see your health care provider more often. Your health care provider will schedule frequent prenatal visits to check your glucose level and for other tests.</p>
	          	</div>
	          	<br/>
	          	<div>
	          		<h2>How does my health care provider know if my blood glucose level has been well controlled?</h2>
					<p>A blood test called a hemoglobin A1C test may be used to track your progress. This test result gives an estimate of how well your blood glucose level has been controlled during the past 4&ndash;6 weeks</p>
	          	</div>
	          	<br/>
	          	<div>
	          		<h2>Can pregnancy affect my glucose level?</h2>
					<p>Women with diabetes are more likely to have low blood glucose levels, known as hypoglycemia, when they are pregnant. Hypoglycemia can occur if you do not eat enough food, skip a meal, do not eat at the right time of day, or exercise too much. Make sure you and family members know what to do if you think you are having symptoms of hypoglycemia, such as dizziness, feeling shaky, sudden hunger, sweating, or weakness.</p>
	          	</div>
	          	<br/>
	          	<div>
	          		<h2>How can my diet affect my pregnancy?</h2>
					<p>Eating a well-balanced, healthy diet is a critical part of any pregnancy because your baby depends on the food you eat for its growth and nourishment (see the FAQ&nbsp;<a href="https://www.acog.org/Patients/FAQs/Nutrition-During-Pregnancy">Nutrition During Pregnancy</a>). In women with diabetes, diet is even more important. Not eating properly can cause your glucose level to go too high or too low.</p>
	          	</div>
	          	<br/>
	          	<div>
	          		<h2>How can exercise help during my pregnancy?</h2>
					<p>Exercise helps keep your glucose level in the normal range and has many other benefits, including controlling your weight; boosting your energy; aiding sleep; and reducing backaches, constipation, and bloating.</p>
	          	</div>
	          	<br/>
	          	<div>
	          		<h2>Will I take medications to control my diabetes during pregnancy?</h2>
					<p>If you took insulin before pregnancy to control your diabetes, your insulin dosage usually will increase while you are pregnant. Insulin is safe to use during pregnancy and does not cause birth defects. If you used an insulin pump before you became pregnant, you probably will be able to continue using the pump. Sometimes, however, you may need to switch to insulin shots.</p>
					<p>If you normally manage your diabetes with oral medications, your health care provider may suggest a change in your dosage or that you take insulin while you are pregnant.</p>
	          	</div>
	          	<br/>
	          	<div>
	          		<h2>How will diabetes affect labor and delivery?</h2>
					<p>Labor may be induced (started by drugs or other means) earlier than the due date, especially if problems with the pregnancy arise. While you are in labor, your glucose level will be monitored closely&mdash;typically every hour. If needed, you may receive insulin through an intravenous (IV) line. If you use an insulin pump, you may use it during labor.</p>
	          	</div>
	          	<br/>
	          	<div>
	          		<h2>If I have diabetes, can I breastfeed my baby?</h2>
					<p>Experts highly recommend breastfeeding for women with diabetes. Breastfeeding gives the baby the best nutrition to stay healthy, and it is good for the mother as well. It helps new mothers shed the extra weight that they may have gained during pregnancy and causes the uterus to return more quickly to its prepregnancy size.</p>
	          	</div>
	          	<br/>
	          	

			  </section>

			</main>
          	
          	
          	
          	
          	<div>

          	</div>
          	<div>
          	</div>
          	<div>
          	</div>
          </div>
        );
    }

}
export default FAQ;