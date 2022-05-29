import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import plusIcon from '../../asset/icons/icon-plus.svg';
import searchIcon from '../../asset/icons/icon-search.svg';
import { ReactComponent as BookmarkIcon} from '../../asset/icons/icon-bookmark.svg';
import peoppleIcon from '../../asset/icons/icon-people.svg';
import arrowIcon from '../../asset/icons/icon-dropbox-arrow.svg';

type SubMenuType = {
    [key: string] : string[]
}

const menus = ['전체', '프로그래밍', '디자인', '기획/마케팅', '어학', '자격증', '취업', '취미'];
const filters = ['마감임박순', '인원순'];
const subMenus : SubMenuType = {
    '전체' : [''],
    '프로그래밍' : ['어쩌구2', '저쩌구'],
    '디자인' : ['어쩌구3', '저쩌구'],
    '기획/마케팅' : ['어쩌구4', '저쩌구'],
    '어학' : ['어쩌구5', '저쩌구'],
    '자격증' : ['어쩌구6', '저쩌구'],
    '취업' : ['어쩌구7', '저쩌구'],
    '취미' : ['어쩌구9', '저쩌구'],
}

const StudyList = () => {
    const [selectedMenuIndex, setSelectedMenuIndex] = useState<number>(0);
    const [selectedSubMenuIndex, setSelectedSubMenuIndex] = useState<number>(0);

    const [isCheck, setIsCheck] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedFilter, setSelectedFilter] = useState<number>(0);

    const [studyLists, setStudyLists] = useState<any>([
        {
            title: '[코딩테스트(알고리즘) 스터디] 넼알앜웁에',
            isCheck: true,
            members: 3,
            deadLine: 'd-13',
            online: '온라인',
            field: '프로그래밍',
            level: '입문'
        },
        {
            title: '[코딩테스트(알고리즘) 스터디] 넼알앜웁에',
            isCheck: false,
            members: 3,
            deadLine: 'd-13',
            online: '온라인',
            field: '프로그래밍',
            level: '입문'
        },
        {
            title: '[코딩테스트(알고리즘) 스터디] 넼알앜웁에',
            isCheck: false,
            members: 3,
            deadLine: 'd-13',
            online: '온라인',
            field: '프로그래밍',
            level: '입문'
        },
        {
            title: '[코딩테스트(알고리즘) 스터디] 넼알앜웁에',
            isCheck: true,
            members: 3,
            deadLine: 'd-13',
            online: '온라인',
            field: '프로그래밍',
            level: '입문'
        }
    ])
    const [maxLength, setMaxLength] = useState<number>(5);
    const [page, setPage] = useState<number>(0);

    const onClickNextPage = () => {
        if (page < maxLength - 1) {
            setPage(page => page + 1);
            return;
        }
    }

    const onClickPrevPage = () => {
        if (page > 0) {
            setPage(page => page - 1);
            return;
        }
    }

    useEffect(() => {
        setSelectedSubMenuIndex(0);
    },[selectedMenuIndex]);

    return (
        <>
            <Header headerColor={'white'}/>
            <StudyListContainer>
                <MenuTab>
                    {menus.map((menu: string, index: number) => {
                        return <Menu selectedMenu={index === selectedMenuIndex} onClick={() => setSelectedMenuIndex(index)}>{menu}</Menu>
                    })}
                </MenuTab>
                <MenuTab>
                    {subMenus[menus[selectedMenuIndex]].map((menu: string, index: number) => {
                        if (selectedMenuIndex !== 0)
                        return <Menu selectedMenu={index === selectedSubMenuIndex} onClick={() => setSelectedSubMenuIndex(index)}>{menu}</Menu>
                    })}
                </MenuTab>
                <CommonBox gap='26px'>
                    <SearchBar>
                        <img src={searchIcon}/>
                        <Input placeholder='찾으시는 스터디가 있으신가요?'/>
                    </SearchBar>
                    <RegisterButton>
                        <img src={plusIcon}/>
                        스터디 개설하기
                    </RegisterButton>
                </CommonBox>
                <CommonBox justifyContent='space-between' margin='66px 0px 0px 0px' width='1200px'>
                    <CommonBox alighItems='center' gap='11px'>
                        <input type={'checkbox'}/>
                        <Label>모집 완료 스터디도 보기</Label>
                    </CommonBox>
                    <DropBox>
                    <div onClick={() => setIsOpen(!isOpen)}>
                        {filters[selectedFilter]} <img src={arrowIcon}/>
                    </div>
                    {isOpen && 
                        <Elements>
                        {filters.map((filter: string, index: number) => {
                            return <div onClick={() => setSelectedFilter(index)}>{filter}</div>
                        })}
                        </Elements>
                    }
                    </DropBox>
                </CommonBox>
                <ListsBox>
                    {studyLists.map((studyList: any, index: number) => {
                        return <List index={index} {...studyList}/>
                    })}
                </ListsBox>
                <PageNation>
                    <p onClick={onClickPrevPage}>이전</p>
                    {Array.from(Array(maxLength)).map((i: any, index: any) => {
                        return <Page selectedPage={index === page} onClick={() => setPage(index)}>{index + 1}</Page>
                    })}
                    <p onClick={onClickNextPage}>다음</p>
                </PageNation>
            </StudyListContainer>
        </>
    )
}

export default StudyList;

const CommonBox = styled.div<{flexDirection?: string, justifyContent?: string, alighItems?: string, margin?: string, gap?: string, width?: string}>`
    display: flex;
    gap: ${props => props.gap};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alighItems};
    margin: ${props => props.margin};
    flex-direction: ${props => props.flexDirection};
    width: ${props => props.width};
`;

const StudyListContainer = styled.div`
    width: 100vw;
    background-color: #F8F9FC;
    height: 100vh;
    padding: 250.5px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MenuTab = styled.div`
    display: flex;
    gap: 28px;
    margin-bottom: 31.5px;
    
`;

const Menu = styled.button<{selectedMenu: boolean}>`
    padding: 16px 25px;
    height: 55px;
    background: ${props => props.selectedMenu ? '#497EF1' : '#F1F2F4'};
    border: none;
    border-radius: 32px;
    font-size: 16px;
    line-height: 23px;
    color: ${props => props.selectedMenu ? '#FFFFFF' : '#22272E'};
`;

const SearchBar = styled.div`
    width: 953px;
    height: 67px;
    background: rgba(241, 242, 244, 0.4);
    border: 0.5px solid rgba(136, 137, 142, 0.8);
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 15.75px;
    padding-left: 27px;
`;

const Input = styled.input`
    border: none;
    &:focus {
        outline: none;
    }
    background: rgba(241, 242, 244, 0.4);
    font-size: 20px;
    line-height: 29px;
    width: 800px;
`

const RegisterButton = styled.button`
    border: 0.5px solid #497EF1;
    border-radius: 33.5px;

    font-weight: 400;
    font-size: 20px;
    line-height: 29px;

    color: #497EF1;
    padding: 19px 27px;
    display: flex;
    align-items: center;
    gap: 13.75px;
    background: #F8F9FC;
`;

const Label = styled.label`
    font-size: 18px;
    line-height: 26px;

    color: #88898E;
    
`;

const DropBox = styled.div`
    width: 108px;
    height: 26px;
    position: relative;
    font-size: 18px;
    line-height: 26px;
    /* identical to box height */

    color: #22272E;
`;

const ListsBox = styled.div`
    margin-top: 29px;
    height: 639px;
    background: #FFFFFF;
    padding: 57px 63px 57px 69px;
`;

const PageNation = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;

    color: #88898E;
`;

const Page = styled.div<{selectedPage: boolean}>`
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;

    color: ${props => props.selectedPage ? '#497EF1' : '#88898E'};
`;

const Elements = styled.div`
    position: absolute;
    z-index: 10;
`;

const List = (studyList: any) => {
    const [isCheck, setIsCheck] = useState<boolean>(studyList.isCheck);

    const onClickBookmark = () => {
        setIsCheck(!isCheck);
        if (!isCheck) {
            alert('찜하기에 추가되었습니다.');
            return;
        } else {
            alert('찜하기가 해제되었습니다.');
        }
    }

    return (
        <ListContainer index={studyList.index}>
            <CommonBox flexDirection='column'>
                <CommonBox gap='9px'>
                    <Tag>{studyList.deadLine}</Tag>
                    <Tag>{studyList.online}</Tag>
                    <Tag>{studyList.field}</Tag>
                    <Tag>{studyList.level}</Tag>
                </CommonBox>
                <ListTitle>
                    {studyList.title}
                    <img src={peoppleIcon}/>
                    <PeopleNumber>3/6</PeopleNumber>
                </ListTitle>
            </CommonBox>
            {isCheck ? 
                <CheckedBookmark onClick={onClickBookmark}/>
            : <UncheckedBookmark onClick={onClickBookmark}/>}
        </ListContainer>
    )
}

const ListContainer = styled.div<{index?: number}>`
    border-bottom: ${props => props.index !== 3 && '1px solid #D9D9D9'};
    display: flex;
    justify-content: space-between;
    margin-bottom: 43px;
    width: 1068px;
`;

const Tag = styled.div`
    padding: 6px 11px;
    height: 26px;
    background: rgba(73, 126, 241, 0.1);
    border-radius: 25px;
    font-weight: 500;
    font-size: 10px;
    line-height: 26px;
    text-align: center;

    color: #497EF1;
`;

const ListTitle = styled.p`
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 17px;
    line-height: 25px;

    color: #22272E;
    margin-bottom: 43px;

    & > img {
        margin-left: 15px;
        margin-right: 4px;
    }
`;

const PeopleNumber = styled.span`
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;

    color: #969696;
`;

const UncheckedBookmark = styled(BookmarkIcon)`
    margin-top: 15px;
`

const CheckedBookmark = styled(BookmarkIcon)`
    & > path {
        fill: #497EF1;
    }
    margin-top: 15px;
`;