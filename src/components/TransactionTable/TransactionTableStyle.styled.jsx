import styled from "@emotion/styled";
import { colors, device } from "../../styles/utils";

export const TransactionSection = styled.section`
margin: 0 auto;

   table {
       @media ${device.tablet}{   
     background-color: ${colors.bgSummary};
     padding: 1px;
     border-radius: 20px 20px 0 0;  

    }
  }
  
   thead {
     @media ${device.tabletMax}{   
     display:none;
     }
    tr{
        @media ${device.tablet} {
     height: 40px;
     font-weight: 700;
     font-size: 12px;
     line-height: 1.16;
     display: flex;
     align-items: center;
     text-align: center;
     letter-spacing: 0.02em;
     text-transform: uppercase;
     background-color: ${colors.bgSummary};
     border-radius: 20px 20px 0 0;
     
}
}
th{
    :nth-of-type(1) { 
   @media ${device.tablet} {
     width: 66px;
     margin-right: 27px;
     margin-left: 10px;
};

  @media ${device.laptop} {
     width: 84px;
     margin-right: 20px;
     margin-left: 10px;
    };
 };
 :nth-of-type(2){
    @media ${device.tablet} {
     width: 97px;
     margin-right: 86px;
      };
  @media ${device.laptop} {
     width: 74px;
     margin-right: 150px;
    }; 
 }; 
 :nth-of-type(3){
     @media ${device.tablet} {
     width: 120px;
     margin-right: 16px;
};

  @media ${device.laptop} {
     width: 172px;
     margin-right: 33px;
    };

 };
 :nth-of-type(4){
       @media ${device.tablet} {
     width: 104px;
     margin-right: 84px;
};
  @media ${device.laptop} {
     margin-right: 113px;
    };
 },

}}}
    tbody{

    
tr{
     font-weight: 400;
font-size: 12px;
line-height: 1.16;
letter-spacing: 0.04em;
background-color: ${colors.white};
height: 50px;
margin-bottom: 2px;
min-width:245px;

  @media ${device.mobileS}{
     min-width:280px;
 };

  @media ${device.mobileL}{
     min-width:400px;
 };

  @media ${device.tabletMax}{ 
     display: grid; 
    border-bottom: 2px solid ${colors.bgSummary}; 
     align-items: center; 
     padding:10px 0;
   };

  @media ${device.tablet} {
     display: flex;
     align-items: center;
     height: 40px;
}
    
    td {
  :nth-of-type(1) { 
 @media ${device.tabletMax}{   
     grid-row: 2/4;
     font-size: 8px;
     line-height:1.12; 
   };
  @media ${device.tablet} {
     width: 84px;
     margin-right: 20px;
     margin-left: 10px;
};
  @media ${device.laptop} {
     width: 84px;
     margin-right: 20px;
     margin-left: 10px;
    };
  
 };
:nth-of-type(2){
  @media ${device.tabletMax}{   
     padding-bottom:5px;
     font-weight: 700;
   };
   @media ${device.tablet} {
     text-align: start; 
     width: 168px;
     margin-right: 9px;
     display: flex;
     justify-content: flex-start;
   };
  @media ${device.laptop} {
     width: 188px;
     margin-right: 61px;
     display: flex;
     justify-content: flex-start;
    };
 }; 
 :nth-of-type(3){
    @media ${device.tabletMax}{  
     padding-top:22px;
     margin-right:29px;
     grid-row: 1/4; 
     font-size: 8px;
     line-height:1.12; 
   };
  @media ${device.tablet} {
     width: 111px;
     margin-right: 10px;
};
  @media ${device.laptop} {
     width: 116px;
     margin-right: 49px;
 };
};
 :nth-of-type(4){
     @media ${device.tabletMax}{
     grid-row: 1/4;   
     font-weight: 700;
   };
  @media ${device.tablet} {
     width: 104px;
     margin-right: 40px;
   };
  @media ${device.laptop} {
     width: 118px;
     margin-right: 23px;
   };  
 };
 :nth-of-type(5){
    width: 32px;
  grid-row: 1/4;
  border: none;
  border-radius: 50%;
  padding:7px 0;

       :hover,
       :focus{
           background-color: ${colors.bgSummary};
       }

       @media ${device.tablet} {
          margin-right: 26px;
        };

       @media ${device.laptop} {
          margin-right: 41px;
        }; 
       }
      }
      }
     }
`;
