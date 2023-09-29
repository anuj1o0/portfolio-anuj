import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client =  sanityClient({
    projectId: 'g15a2oz6',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skTqN41tc3FunyAoEpmto98hfEfEZ5NGdtnJmrIhbG47HgIpF328UUT5BJan72nttgTxyjZHGKFwIrSMDlZqLcaZCSVzQTjALSK0RQ8uyy51UDn5dbnXOPDp6ardN8dTFEP4pMO37bhvIw8rg0ibEF78AcuwSx08YRl3xxuuA1jlqAWpn2r7',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);