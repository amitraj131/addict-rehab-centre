import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import Form5 from './Form5';
import Form6 from './Form6';
import Form7 from './Form7';
import Form8 from './Form8';
import Form9 from './Form9';
import Form10 from './Form10';
import Form11 from './Form11';
import Form12 from './Form12';
import Form13 from './Form13';
import Drugs from './Drugs';
import DSM from './DSM';
import PreviousHospitals from './PreviousHospitals';
import TextField from '@material-ui/core/TextField';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Family from './Family';


export class UserForm extends Component {
  // const { firstName, lastName,dob, gender, dor, campno, camplace } = this.state;
  
  suraj = true;
  handleDateChange(date){
    console.log(date)
    // this.setState({[input]: k.target.value});
  };


  state = {
    brothers : [],sisters : [],children : [],whoInFamily : '',drugFamily : '', familyPsychiatric : '',describeUntoward : '',untowardActionTaken : '',
    step: 1,
    firstName: '',f_alive : '',f_dead : '',m_alive : '' , m_dead : '' , w_alive : '' , w_dead : '',
    lastName: '',
    age : '',
    reg : '',
    gender: '',
    dor: '',
    campno: '',
    camplace: '',
    resadd: '',
    pincode:'',
    telno : '' ,totalDebtAmount : '',
    religion : '',
    community : '',suspiciousOfWife : '',
    education : '',wifeOccupation : '',wifeOther : '',
    occupation : '',recongnition : '',
    income : '',jobChangedDueToAddiction : '',legalIssues : '',
    marital: '',moneyBorrowedFrom : '',
    living: '',subsequentMarraiges : '',
    support: '',
    supportrelation: '',
    supportaddress: '',familyViolence : '',
    refferal : '',startingAgeOfWork : '',
    drugs : [],
    rs_totry : '',
    rs_tofeelbetter : '',
    rs_toavoidproblems : '',
    rs_other : '',
    rs_other_stressor : '' ,
    rc_likedtheeffect : '',achievementsInEducation : '',
    rc_friendsforced : '',
    rc_gaveconfidence : '',
    rc_craving : '',separatedDueToAddiction : '',
    rc_feltrelaxed : '',
    rc_others : '',
    s_familyissues : '',
    s_financialstress : '',
    s_workstree : '',
    noOfYearsOfEducation : '',
    s_unknownstress : '',
    s_others : '',
    chp_diabetes : '',
    chp_liver_disorders : '' ,
    chp_epilepsy : '',
    chp_respiratory_problem  : '',
    chp_pulmonary_TB : '',
    chp_chronic_bronchitis : '',
    chp_bronchial_asthama : '',
    chp_cardiac_problems : '',
    chp_infections : '',
    periodOfSeparationFromWife : '',
    chp_others : '' ,
    chp_others_specify : '',
    pcpast_consfusion : '',
    pcpast_seizure : '',
    pcpast_depression : '',
    pcpast_suicidal_ideation : '',
    pcpast_aggressive_outburst : '',
    pcpast_hallucinaiton : '',
    pcpast_paranoid_ideas : '',
    pcpast_others : '',
    pcpast_others_specify : '',
    pcpresent_consfusion : '',
    pcpresent_seizure : '',
    pcpresent_depression : '',
    pcpresent_suicidal_ideation : '',
    pcpresent_aggressive_outburst : '',
    pcpresent_hallucinaiton : '',
    pcpresent_paranoid_ideas : '',
    pcpresent_others : '',
    pcpresent_others_specify : '',
    dol : '',yearsOfWorking : '',
    qtylast : '',
    denialProblems : '',
    motivationFactor : '',
    willingnessForTreatment:'',
    actionTaken : '',
    nameCampOfficer : '',
    pulseRate : '',
    bloodPressure : '',
    weight : '',
    height : '',
    natureOfCurrentWork : '',
    sugar : '',typeOfMarraige : '',
    otherdetails : '',
    w_sweating : '',
    w_palpitation : '',
    w_tremors : '',
    w_insomnia : '' ,
    w_fits : '' ,
    w_nausea : '' ,
    w_achesandpains : '',
    w_anxiety : '',
    w_restlessness : '',
    w_tactile : '',
    w_illusions : '',
    mppast_Haematemesis : '',
    mppast_jaundice : '' ,
    mppast_headiinjury : '',
    mppast_siezure : '',
    mppast_accidents : '',
    mppast_abscesses : '',
    mppast_bleedingpiles : '' ,
    mppast_skin_problems : '',
    mppast_nervepains : '' ,
    mppast_other : '' ,
    mppresent_Haematemesis : '',
    mppresent_jaundice : '' ,
    mppresent_headiinjury : '',
    mppresent_siezure : '',
    mppresent_accidents : '',
    mppresent_abscesses : '',
    mppresent_bleedingpiles : '' ,
    mppresent_skin_problems : '',
    mppresent_nervepains : '' ,
    mppresent_other : '' ,
    headInjury : '',
    allergy : '',
    familyHistory : '',
    untowardIncident : '',
    hospitals : [],
    f_father_alive : '',
    f_father_age : '',
    f_father_health : '',
    f_year_of_death : '',
    f_cause_of_death : '',
    f_patient_age_at_death : '',
    f_mother_alive : '',
    f_mother_age : '',
    f_mother_health : '',
    f_mother_year_of_death : '',
    f_mother_cause_of_death : '',
    f_mother_patient_age_at_death : '',
    f_wife_alive : '',
    f_wife_age : '',
    f_wife_health : '',
    f_wife_year_of_death : '',
    f_wife_cause_of_death : '',occupationalDamage : '',
    f_wife_patient_age_at_death : '',
    f_majorDepression : false,wifeMonIncome : '',
        f_suicide : false,
        f_psychiatric : false,
        f_alcoholdependence : false,high_risk_sexual : '',reasonOfUnemployed : '',
        f_drugdependence : false,f_otherss:false,
        f_other : false,periodOfUnemployment : '',
        extra_marital : '',
        pre_marital:'',
        yearsOfMarraige : '',
        achievementInExtraCurricular : '',
        legalCases : '',
        premarital_affairs : '',
        numberOfTimesLegalities : '',
        sexualProblems : [],
        wifeName : '',wifeAge : '',
        wifeReligion : '',
        wifeEducation : '',
        ace_poverty : '',
        ace_early_parental_loss : '',
        ace_extra_marital_affairs_of_parents : '',
        ace_broken_home : '',
        ace_violence : '',
        ace_sexually_issue : '',
        ace_none : '',
        ace_running_away_from_home : '' ,
        ace_frequent_physical_fights : '',
        ace_destruction_of_others_properties : '',
        ace_stealing : '',
        ace_scholastic_backwardness : '',
        ace_experimenting_with_drugs : '',
        ace_alcohol : '',
        ace_gambling : '',
        ace_sexual_issues : '',
        ace_others : '',
        areYouReligious : '',
        pastTreatmentHistory : '',
        maximum_period_of_abstenence : '',
        possible_factors_for_abstinence : '',
        significant_psychological_problems : '',

  };

  setSexualProblems = (s) =>{
    console.log(s)
    this.setState({sexualProblems : s})
    const {sexualProblems} = this.state;
    console.log(sexualProblems);
  }

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
    
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
  //Store the data
  
  storeData = () =>{
    const { firstName } = this.state;
    alert(firstName + " record is created!")
  };
  
  

  // Handle fields change
  handleChange = input => e => {
    
    
    this.setState({ [input]: e.target.value});
    
  };
  handleBrothers = (b) => {
    this.setState({brothers : b});
    const {brothers} = this.state;
    console.log("Brothers" , brothers , b);
  }

  handleSisters = (s) => {
    this.setState({sisters : s});
    const {sisters} = this.state;
    console.log("Sisters" , sisters , s);
  }
  handleChildren = (c) => {
    this.setState({children : c});
    const {children} = this.state;
    console.log("Children" , children , c);
  }

  handleCheckBoxChange = input => e => {
   // console.log(e.target.checked.toString());
    this.setState({ [input]: e.target.checked});
  };
  // Handle Drugs

  handleDrugsChange =(d) => {
    console.log("d : " + d)
    this.setState({drugs : d});
    const {drugs} = this.state;
    console.log("Drugs" , drugs , d);
  };

  handleHospitalsChange = (h) => {
    console.log("h : " + h);

    this.setState({hospitals : h});
  };
  // Handle Others

  handleOthers = (e , str) => {
    if(str === "start")
      this.setState({reasonStart : e.target.value});
    else if(str === "con")
      this.setState({reasonContinued : e.target.value});
    else 
      this.setState({stressors : e.target.value});

  };

  handleOthers1 = (e) => {
    this.setState({reasonContinued : e.target.value});

  };
  
  render() {
    const { step } = this.state;
    const { firstName, lastName,age, gender,reg , dor, campno, camplace , resadd , telno , religion , community ,
            education,occupation,income,marital,living,support,supportrelation,supportaddress,refferal,drugs,
            reasonStart,reasonContinued,stressors,dol,qtylast,denialProblems,motivationFactor,willingnessForTreatment,
            actionTaken,nameCampOfficer,test,check,pincode,rs_totry,
            rs_tofeelbetter,children,f_alive , f_dead , m_alive , m_dead , w_alive , w_dead,
            rs_toavoidproblems,
            rs_other,
            rs_other_stressor,
            rc_likedtheeffect,
            rc_friendsforced,whoInFamily,drugFamily,familyPsychiatric,describeUntoward,untowardActionTaken,
            rc_gaveconfidence,
            rc_craving,
            rc_feltrelaxed,premarital_affairs,
            rc_others,subsequentMarraiges,
            chp_diabetes,
            chp_liver_disorders,
            chp_epilepsy,
            chp_respiratory_problem,
            chp_pulmonary_TB,
            chp_chronic_bronchitis,
            chp_bronchial_asthama,
            chp_cardiac_problems,
            chp_infections,
            chp_others,chp_others_specify,
            pcpast_consfusion,
            pcpast_seizure,
            pcpast_depression,
            pcpast_suicidal_ideation,
            pcpast_aggressive_outburst,
            pcpast_hallucinaiton,
            pcpast_paranoid_ideas,
            pcpast_others,
            pcpast_others_specify,
            pcpresent_consfusion,
            pcpresent_seizure,
            pcpresent_depression,
            pcpresent_suicidal_ideation,
            pcpresent_aggressive_outburst,
            pcpresent_hallucinaiton,
            pcpresent_paranoid_ideas,
            pcpresent_others,
            pcpresent_others_specify,
            s_familyissues,wifeOther,
            s_financialstress,familyViolence,moneyBorrowedFrom,
            s_workstree,
            s_unknownstress,sexualProblems,suspiciousOfWife,
            s_others,pulseRate,brothers,sisters,
            bloodPressure,
            weight,natureOfCurrentWork,
            height,
            sugar,jobChangedDueToAddiction,
            otherdetails,wifeEducation,
            w_sweating,wifeReligion,noOfYearsOfEducation,
                w_palpitation,
                w_tremors,totalDebtAmount,
                w_insomnia,
                w_fits,yearsOfWorking,
                periodOfSeparationFromWife,
                numberOfTimesLegalities,
                w_nausea,separatedDueToAddiction,
                w_achesandpains,wifeOccupation,
                w_anxiety,startingAgeOfWork,occupationalDamage,
                w_restlessness,recongnition,
                w_tactile,
                w_illusions,
                mppast_Haematemesis,
                mppast_jaundice,periodOfUnemployment,legalIssues,
                mppast_headinjury,
                mppast_siezure,
                mppast_accidents,
                mppast_abscesses,
                mppast_bleedingpiles,
                legalCases,
                mppast_skin_problems,
                mppast_nervepains,wifeAge,
                mppast_other,
                mppresent_Haematemesis,
                mppresent_jaundice,
                mppresent_headinjury,
                mppresent_siezure,
                mppresent_accidents,
                mppresent_abscesses,
                mppresent_bleedingpiles ,
                mppresent_skin_problems,areYouReligious,
                mppresent_nervepains,
                mppresent_other,
                headInjury,achievementsInEducation,
                allergy,
                familyHistory,
                untowardIncident,
                hospitals,
                f_father_alive,f_mother_alive,
                f_father_age,f_mother_age,
                f_father_health,typeOfMarraige,f_mother_health,
                f_year_of_death,f_mother_year_of_death,
                f_cause_of_death,wifeName,f_mother_cause_death,f_mother_cause_of_death,
                f_wife_alive,
                f_wife_age,
                f_wife_health,
                f_wife_year_of_death,
                f_wife_cause_of_death,
                f_majorDepression,yearsOfMarraige,
                f_suicide,
                f_psychiatric,
                f_alcoholdependence,reasonOfUnemployed,
                f_drugdependence,f_otherss,wifeMonIncome,
                f_other,achievementInExtraCurricular,
                extra_marital,
                pre_marital,
                high_risk_sexual,
                ace_poverty,
        ace_early_parental_loss,
        ace_extra_marital_affairs_of_parents ,
        ace_broken_home,
        ace_violence,
        ace_sexually_issue,
        ace_none,
        ace_running_away_from_home ,
        ace_frequent_physical_fights,
        ace_destruction_of_others_properties,
        ace_stealing,
        ace_scholastic_backwardness,
        ace_experimenting_with_drugs,
        ace_alcohol,
        ace_gambling,
        pastTreatmentHistory,
        ace_sexual_issues,
        ace_others ,
        maximum_period_of_abstenence,
        possible_factors_for_abstinence,
        significant_psychological_problems,
        fh_bank,
        fh_ff,
        fh_placeofwork,
        fh_moneylenders,
        fh_SHG,
        fh_Pawnshops,
        fh_liquorshops,
        fh_handloan,
        fh_no,
              } = this.state;
    const values = { firstName, lastName,age, gender,reg, dor, campno, camplace , resadd , telno , religion , community ,
            education,occupation,income,marital,living,support,supportrelation,supportaddress,refferal,drugs,
            reasonStart,reasonContinued,stressors,dol,qtylast,denialProblems,motivationFactor,willingnessForTreatment,
          actionTaken,nameCampOfficer,test,check,pincode,rs_totry,
          rs_tofeelbetter,whoInFamily,drugFamily,familyPsychiatric,describeUntoward,untowardActionTaken,
          rs_toavoidproblems,
          rs_other,typeOfMarraige,
          rc_likedtheeffect,
          rc_friendsforced,
          rc_gaveconfidence,
          rc_craving,wifeEducation,
          rc_feltrelaxed,
          rc_others,premarital_affairs,areYouReligious,
          s_familyissues,wifeName,
          s_financialstress,
          s_workstree,brothers,sisters,
          s_unknownstress,
          s_others,pulseRate,
          bloodPressure,achievementInExtraCurricular,
          weight,wifeOccupation,wifeMonIncome,
          height,wifeAge,children,
          sugar,sexualProblems,startingAgeOfWork,jobChangedDueToAddiction,
          otherdetails,periodOfUnemployment,reasonOfUnemployed,
          w_sweating,natureOfCurrentWork,
          w_palpitation,achievementsInEducation,
          w_tremors,high_risk_sexual,f_alive,f_dead,m_alive,m_dead,w_alive,w_dead,
          w_insomnia,
          w_fits,suspiciousOfWife,
          w_nausea,
          w_achesandpains,
          w_anxiety,yearsOfWorking,
          w_restlessness,subsequentMarraiges,occupationalDamage,
          w_tactile,wifeOther,separatedDueToAddiction,
          w_illusions,moneyBorrowedFrom ,legalIssues,
          chp_diabetes,
            chp_liver_disorders,
            chp_epilepsy,
            chp_respiratory_problem,
            chp_pulmonary_TB,
            chp_chronic_bronchitis,
            chp_bronchial_asthama,
            legalCases,
            chp_cardiac_problems,
            numberOfTimesLegalities,
            chp_infections,
            chp_others,chp_others_specify,
            periodOfSeparationFromWife,

            pcpast_consfusion,
            pcpast_seizure,
            pcpast_depression,
            pcpast_suicidal_ideation,
            pcpast_aggressive_outburst,
            pcpast_hallucinaiton,
            pcpast_paranoid_ideas,
            pcpast_others,
            pcpast_others_specify,
            pcpresent_consfusion,
            pcpresent_seizure,
            pcpresent_depression,
            pcpresent_suicidal_ideation,
            pcpresent_aggressive_outburst,
            pcpresent_hallucinaiton,
            pcpresent_paranoid_ideas,
            pcpresent_others,
            pcpresent_others_specify,
          mppast_Haematemesis,
          mppast_jaundice,totalDebtAmount,
          mppast_headinjury,familyViolence,
          mppast_siezure,
          mppast_accidents,
          mppast_abscesses,wifeReligion,yearsOfMarraige,
          mppast_bleedingpiles,
          mppast_skin_problems,
          mppast_nervepains,recongnition,
          mppast_other,
          mppresent_Haematemesis,
          mppresent_jaundice,
          mppresent_headinjury,
          mppresent_siezure,
          mppresent_accidents,
          mppresent_abscesses,rs_other_stressor,
          mppresent_bleedingpiles ,
          mppresent_skin_problems,noOfYearsOfEducation,
          mppresent_nervepains,
          mppresent_other,
          headInjury,
          allergy,
          familyHistory,
          untowardIncident,
          hospitals,
          f_father_alive,f_mother_alive,
          f_father_age,f_mother_age,
          f_father_health,f_mother_health,
          f_year_of_death,f_mother_year_of_death,
          f_cause_of_death,f_mother_cause_of_death,
          f_wife_alive,
                f_wife_age,
                f_wife_health,
                f_wife_year_of_death,
                f_wife_cause_of_death,
                f_majorDepression,
                f_suicide,
                f_psychiatric,
                f_alcoholdependence,
                f_drugdependence,
                f_otherss,
                f_other,
                extra_marital,
                pre_marital,
                ace_poverty,
        ace_early_parental_loss,
        ace_extra_marital_affairs_of_parents ,
        ace_broken_home,
        ace_violence,
        pastTreatmentHistory,
        ace_sexually_issue,
        ace_none,
         ace_running_away_from_home ,
        ace_frequent_physical_fights,
        ace_destruction_of_others_properties,
        ace_stealing,
        ace_scholastic_backwardness,
        ace_experimenting_with_drugs,
        ace_alcohol,
        ace_gambling,
        ace_sexual_issues,
        ace_others ,
        maximum_period_of_abstenence,
        possible_factors_for_abstinence,
        significant_psychological_problems,

        fh_bank,
        fh_ff,
        fh_placeofwork,
        fh_moneylenders,
        fh_SHG,
        fh_Pawnshops,
        fh_liquorshops,
        fh_handloan,
        fh_no,
          };

    
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Form1
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (<Drugs
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleDrugsChange}
            values={values}
         />);
      case 5:
        return (
          <Form2
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleOthers={this.handleOthers}
            handleCheckBoxChange={this.handleCheckBoxChange}
            values={values}
            
          />
        );
      case 6:
        return (
          <Form3
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
          handleCheckBoxChange={this.handleCheckBoxChange}
        /> 
          );
          
      case 7:
        return(
          <Form4
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
          handleCheckBoxChange={this.handleCheckBoxChange}
        />
          
          
        );
      case 8:
        return(
          <Form5
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
          handleCheckBoxChange={this.handleCheckBoxChange}
          />
        );
      case 9:
        return(
          <Form6
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
          handleCheckBoxChange={this.handleCheckBoxChange}
          />
        );
      
      case 10:
        return (
          <Form7
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
          handleCheckBoxChange={this.handleCheckBoxChange}
          />
        );
      case 11:
        return (
          <Form13 //done
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              handleOthers={this.handleOthers}
              handleCheckBoxChange={this.handleCheckBoxChange}
              values={values}
              
            />
         
        );
        case 12:
          return (
            <Form8
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            handleCheckBoxChange={this.handleCheckBoxChange}
            />
          );
        case 13:
          return (
            <PreviousHospitals
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleHospitalsChange}
            values={values}
         />
          );
        case 14:
          return (
            <Family //remaining db
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            handleCheckBoxChange={this.handleCheckBoxChange}
            handleBrothers={this.handleBrothers}
            handleSisters={this.handleSisters}
            handleChildren={this.handleChildren}
            />
          );
       case 15 :
         return (
           <Form9
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            setSexualProblems={this.setSexualProblems}
            values={values}
           />
         );
       case 16 :
         return (
           <Form10
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
           />
         );
      case 17 :
          return (
            <Form11
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            />
          );
       case 18 :
         return (
            <Form12
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleCheckBoxChange={this.handleCheckBoxChange}
            values={values}
            />
         ) ;
         case 19 : 
         return (
           <DSM
           nextStep={this.nextStep}
           prevStep={this.prevStep}
           values={values}
           />
         ) ;
       case 20:
         return (
           <Confirm
             nextStep={this.nextStep}
             prevStep={this.prevStep}
             values={values}
           />
         );
       case 21:
         return (<Success
             storeData={this.storeData}      
         />);
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;
