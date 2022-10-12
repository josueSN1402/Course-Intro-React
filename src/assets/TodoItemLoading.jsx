import React from 'react';
import ContentLoader from 'react-content-loader';

const TodoItemLoading = props => (
    <ContentLoader
        speed={2}
        width={'100%'}
        height={'16.8rem'}
        backgroundColor='#212121'
        foregroundColor='#1A1B1C'
        {...props}
    >
        <rect x='0' y='0' rx='5' ry='5' width='100%' height='4.6rem' />
        <rect x='0' y='60' rx='5' ry='5' width='100%' height='4.6rem' />
        <rect x='0' y='120' rx='5' ry='5' width='100%' height='4.6rem' />
    </ContentLoader>
);

export { TodoItemLoading };
