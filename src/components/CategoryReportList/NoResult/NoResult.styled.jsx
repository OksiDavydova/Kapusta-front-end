import styled from "@emotion/styled";
import {device} from '../../../styles/utils'

export const NoResultDiv = styled.div`
padding: 10px;

& > img {
    margin: 0px auto;

    @media${device.tabletMax}{
        width: 320px;
    }
    @media${device.tablet}{
        width: 768px;
    }
    @media${device.desktop}{
        width: 800px;
    }
}
`
