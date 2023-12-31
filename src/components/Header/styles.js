import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    height: 7.25rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;

    padding: 1.5rem 7.7rem;

    grid-area: "header";

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};

    > h1{
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 1.5rem;
        font-weight: bold;
    }
`
export const Profile = styled(Link)`
    min-width: 12.4rem;
    display: flex;
    align-items: center;

    gap: 0.56rem;

    > div{
        display: flex;
        flex-direction: column;

        font-size: 0.88rem;
        text-align: right;
        color: ${({ theme }) => theme.COLORS.WHITE};

        > a{
            color: ${({ theme }) => theme.COLORS.GRAY_200};
        }
    }

    > img {
        width: 4rem;
        height: 4rem;

        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
    }

`

export const Logout = styled(Link)`
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
`