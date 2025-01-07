const { createTheme } = require("@mui/material");

export const darkTheme = createTheme(
    {
        palette:{
            mode:'dark',
            primary:{
                main:'#61481C'
                // main:'#e91e63'
            },
            secondary:{
                main:'#61481C'
            },
            black:{
                main:'#242B2E'
            },
            background:{
                main:'#000000',
                default:'#0D0D0D',
                paper:'#0D0D0D'
            },
            textColor:{
                main:'#111111'
            }
        }
    }
)