import React from 'react'

import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'
import SuperSelect from "../../hw07/common/c5-SuperSelect/SuperSelect";

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = Math.ceil(totalCount / itemsCountForPage)

    const onChangeCallback = (event: any, page: number) => {

        // пишет студент
        onChange(page, itemsCountForPage)

    }

    const onChangeSelect = (event: any) => {
        onChange(page, event);
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '& > ul': {
                        margin: 0,
                        padding: 0,
                        listStyle: 'none',
                    },
                    '& .Mui-selected': {
                        backgroundColor: '#0784e3 !important',
                        color: '#fff',
                    },
                    '& .MuiPaginationItem-root': {
                        margin: '0 4px',
                        borderRadius: '5%',
                        height: '20px',
                    },
                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
        показать
        </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChangeOption={onChangeSelect}
            />

            <span className={s.text2}>
        строк в таблице
    </span>
        </div>
    )
}

export default SuperPagination