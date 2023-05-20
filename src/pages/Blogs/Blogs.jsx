import React from 'react';
import useTitle from '../../components/Hooks/Usetitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div>
            <div className='   p-3 bg-rose-200 mb-3 mt-4 border-2'>
                <h2 className='text-2xl'> What is express js? What is Nest JS?</h2>
                <p className='text-gray-700 font-semibold'><strong>Ans : </strong>
                    Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.
                </p>
            </div>
            <div className='   p-3 bg-rose-200 mb-3 mt-4 border-2'>
                <h2 className='text-2xl'> What is MongoDB aggregate and how does it work?</h2>
                <p className='text-gray-700 font-semibold'><strong>Ans : </strong>
                    Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
                </p>
            </div>
            <div className='  p-3 bg-rose-200 mb-3 mt-4 border-2'>
                <h2 className='text-2xl'>Compare SQL and NoSQL databases? </h2>
                <p className='text-gray-700 font-semibold'><strong>Ans : </strong>
                    1: SQL databases are relational, and NoSQL databases are non-relational.
                    2: SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                    3: SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                    4: SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                    5: SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                </p>
            </div>
            <div className='   p-3 bg-rose-200 mb-3 mt-4 border-2'>
                <h2 className='text-2xl'> What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p className='text-gray-700 font-semibold'><strong>Ans : </strong>
                    Refresh tokens allow you to balance your users' access needs with your organization's security practices. Access tokens help users get the resources they need to complete their tasks, but such tokens can also expose your organization to data compromise or other malicious actions if a hacker is able to steal them
                </p>
            </div>
        </div>
    );
};

export default Blogs;