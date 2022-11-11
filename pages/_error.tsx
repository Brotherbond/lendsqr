import type { NextPage } from 'next'
import Default from "@/layouts/Default"
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Router from 'next/router';

interface Props {
    statusCode: number;
}

const Error: React.FC<Props> = ({ statusCode }) => {
    const title = statusCode === 404 ? '404' : 'Error';

    return (
        <Default title='Error'>
            <Head>
                <title>Error {statusCode}</title>
            </Head>
            <>
                {statusCode === 404
                    ? 'The page you are looking for could not be found.'
                    : 'An error occurred.'}
            </>
        </Default>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
    const statusCode = res ? res.statusCode : 404;

    if (statusCode === 404) {
        if ((req.url as string).match(/\/$/)) {
            const withoutTrailingSlash = (req.url as string).substr(0, (req.url as string).length - 1);
            if (res) {
                res.writeHead(303, {
                    Location: withoutTrailingSlash
                });
                res.end();
            }
            else {
                Router.push(withoutTrailingSlash);
            }
        }
    }

    return {
        props: {
            statusCode
        }
    };
};

export default Error;