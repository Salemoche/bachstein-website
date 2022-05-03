import { gql } from "@apollo/client";

export const SITE_QUERY = () => {
    return gql `
    query MyQuery {
        menus {
            nodes {
                slug
                menuItems {
                    nodes {
                        path
                        label
                        childItems {
                            nodes {
                                label
                                path
                            }
                        }
                    }
                }
            }
        }
        bsSiteSettings {
            siteSettings {
                cookieNotice
                cookieDeny
                cookieAccept
                gabrielImage {
                    altText
                    mediaItemUrl
                    srcSet
                    mediaDetails {
                        height
                        width
                        sizes {
                            sourceUrl
                            name
                            height
                            width
                        }
                    }
                }
            }
        }
    }`
}

export const PAGE_QUERY = () => {
    return gql `
    query MyQuery {
        pages {
            nodes {
                id
                title
                slug
                isFrontPage
                locale {
                    locale
                }
                excerpt
                content
                blocks {
                    name
                    originalContent
                    saveContent
                    order
                    attributesJSON
                    innerBlocks {
                        name
                        originalContent
                        saveContent
                        order
                        attributesJSON
                    }
                }  
                home {
                    ctaButtonText
                    ctaHeader
                    ctaImage {
                        altText
                        mediaItemUrl
                        srcSet
                        mediaDetails {
                            height
                            width
                            sizes {
                                sourceUrl
                                name
                                height
                                width
                            }
                        }
                    }
                    ctaText
                    fieldGroupName
                    headerImage {
                        altText
                        mediaItemUrl
                        srcSet
                        mediaDetails {
                            height
                            width
                            sizes {
                                sourceUrl
                                name
                                height
                                width
                            }
                        }
                    }
                    introText
                    introImage {
                        altText
                        mediaItemUrl
                        srcSet
                        mediaDetails {
                            height
                            width
                            sizes {
                                sourceUrl
                                name
                                height
                                width
                            }
                        }
                    }
                    introHeader
                    strapline
                    contactFormTitle
                    contactFormLead
                    clientsTitle
                    clients {
                        __typename
                        ... on Kunde {
                            title
                            acfKunden {
                                url
                                logoLight {
                                    altText
                                    mediaItemUrl
                                    srcSet
                                    mediaDetails {
                                        height
                                        width
                                        sizes {
                                            sourceUrl
                                            name
                                            height
                                            width
                                        }
                                    }
                                }
                                logoDark {
                                    altText
                                    mediaItemUrl
                                    srcSet
                                    mediaDetails {
                                        height
                                        width
                                        sizes {
                                            sourceUrl
                                            name
                                            height
                                            width
                                        }
                                    }
                                }
                            }
                        }
                    }
                    projectsTitle
                    projectsButton
                    projects {
                        __typename
                        ... on Projekt {
                        title
                        acfProjekt {
                            mainImage {
                                altText
                                mediaItemUrl
                                srcSet
                                mediaDetails {
                                    height
                                    width
                                    sizes {
                                        sourceUrl
                                        name
                                        height
                                        width
                                    }
                                }
                            }
                            url
                            meta {
                                    title
                                    text
                                }
                            }
                        }
                    }
                }
                seo {
                    canonical
                    cornerstone
                    focuskw
                    fullHead
                    metaDesc
                    metaKeywords
                    metaRobotsNofollow
                    metaRobotsNoindex
                    opengraphAuthor
                    opengraphDescription
                    opengraphModifiedTime
                    opengraphPublishedTime
                    opengraphPublisher
                    opengraphSiteName
                    opengraphTitle
                    opengraphType
                    opengraphUrl
                    readingTime
                    title
                    twitterDescription
                    twitterTitle
                }
                featuredImage {
                    node {
                        altText
                        mediaItemUrl
                        srcSet
                        mediaDetails {
                            height
                            width
                            sizes {
                                sourceUrl
                                name
                                height
                                width
                            }
                        }
                    }
                }
                translated {
                    id
                    title
                    slug
                    isFrontPage
                    locale {
                        locale
                    }
                    excerpt
                    content
                    blocks {
                        name
                        originalContent
                        saveContent
                        order
                        attributesJSON
                        innerBlocks {
                            name
                            originalContent
                            saveContent
                            order
                            attributesJSON
                        }
                    }
                    home { 
                        ctaButtonText
                        ctaHeader
                        ctaImage {
                            altText
                            mediaItemUrl
                            srcSet
                            mediaDetails {
                                height
                                width
                                sizes {
                                    sourceUrl
                                    name
                                    height
                                    width
                                }
                            }
                        }
                        ctaText
                        fieldGroupName
                        headerImage {
                            altText
                            mediaItemUrl
                            srcSet
                            mediaDetails {
                                height
                                width
                                sizes {
                                    sourceUrl
                                    name
                                    height
                                    width
                                }
                            }
                        }
                        introText
                        introImage {
                            altText
                            mediaItemUrl
                            srcSet
                            mediaDetails {
                                height
                                width
                                sizes {
                                    sourceUrl
                                    name
                                    height
                                    width
                                }
                            }
                        }
                        introHeader
                        strapline
                        contactFormTitle
                        contactFormLead
                        clientsTitle
                        clients {
                            __typename
                            ... on Kunde {
                                title
                                acfKunden {
                                    url
                                    logoLight {
                                        altText
                                        mediaItemUrl
                                        srcSet
                                        mediaDetails {
                                            height
                                            width
                                            sizes {
                                                sourceUrl
                                                name
                                                height
                                                width
                                            }
                                        }
                                    }
                                    logoDark {
                                        altText
                                        mediaItemUrl
                                        srcSet
                                        mediaDetails {
                                            height
                                            width
                                            sizes {
                                                sourceUrl
                                                name
                                                height
                                                width
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        projectsTitle
                        projectsButton
                        projects {
                            __typename
                            ... on Projekt {
                            title
                            acfProjekt {
                                mainImage {
                                    altText
                                    mediaItemUrl
                                    srcSet
                                    mediaDetails {
                                        height
                                        width
                                        sizes {
                                            sourceUrl
                                            name
                                            height
                                            width
                                        }
                                    }
                                }
                                url
                                meta {
                                    title
                                    text
                                    }
                                }
                                
                            }
                        }
                    }
                    seo {
                        canonical
                        cornerstone
                        focuskw
                        fullHead
                        metaDesc
                        metaKeywords
                        metaRobotsNofollow
                        metaRobotsNoindex
                        opengraphAuthor
                        opengraphDescription
                        opengraphModifiedTime
                        opengraphPublishedTime
                        opengraphPublisher
                        opengraphSiteName
                        opengraphTitle
                        opengraphType
                        opengraphUrl
                        readingTime
                        title
                        twitterDescription
                        twitterTitle
                    }
                    featuredImage {
                        node {
                            altText
                            mediaItemUrl
                            srcSet
                            mediaDetails {
                                height
                                width
                                sizes {
                                    sourceUrl
                                    name
                                    height
                                    width
                                }
                            }
                        }
                    }
                }
            }
        }
        bsSiteSettings {
            siteSettings {
                cookieNotice
                cookieDeny
                cookieAccept
                gabrielImage {
                    altText
                    mediaItemUrl
                    srcSet
                    mediaDetails {
                        height
                        width
                        sizes {
                            sourceUrl
                            name
                            height
                            width
                        }
                    }
                }
                footerImage {
                    altText
                    mediaItemUrl
                    srcSet
                    mediaDetails {
                        height
                        width
                        sizes {
                            sourceUrl
                            name
                            height
                            width
                        }
                    }
                }
            }
        }
        menus {
            nodes {
                slug
                menuItems {
                    nodes {
                        path
                        label
                        childItems {
                            nodes {
                                label
                                path
                            }
                        }
                    }
                }
            }
        }
        mediaItems {
            nodes {
                databaseId
                mediaItemUrl
                srcSet
                mediaDetails {
                    width,
                    height
                    sizes {
                        name
                        sourceUrl
                    }
                }
            }
        }
    }`
}

// export const PAGES_QUERY = () => {
//     return gql `
//     query MyQuery {
//         pages {
//             nodes {
//                 id
//                 title
//                 slug
//                 isFrontPage
//                 featuredImage {
//                     node {
//                         altText
//                         mediaItemUrl
//                         mediaDetails {
//                             sizes {
//                                 sourceUrl
//                                 name
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }`
// }

export const POST_QUERY = ( slug ) => {
    return gql`
    query MyQuery {
        post(id: "${slug}", idType: SLUG) {
            id
            title
            slug
            excerpt
            content
            blocks {
                name
                originalContent
                saveContent
                order
                attributesJSON
            }
            locale {
                locale
            }
            seo {
                    canonical
                    cornerstone
                    focuskw
                    fullHead
                    metaDesc
                    metaKeywords
                    metaRobotsNofollow
                    metaRobotsNoindex
                    opengraphAuthor
                    opengraphDescription
                    opengraphModifiedTime
                    opengraphPublishedTime
                    opengraphPublisher
                    opengraphSiteName
                    opengraphTitle
                    opengraphType
                    opengraphUrl
                    readingTime
                    title
                    twitterDescription
                    twitterTitle
            }
            featuredImage {
                node {
                    altText
                    mediaItemUrl
                    srcSet
                    mediaDetails {
                        sizes {
                            sourceUrl
                            name
                        }
                    }
                }
            }
        }
        menus {
            nodes {
                slug
                menuItems {
                    nodes {
                        path
                        label
                        childItems {
                            nodes {
                                label
                                path
                            }
                        }
                    }
                }
            }
        }
        mediaItems {
            nodes {
                databaseId
                mediaItemUrl
                srcSet
                mediaDetails {
                    width,
                    height
                    sizes {
                        name
                        sourceUrl
                    }
                }
            }
        }
    }`
} 

export const POSTS_QUERY = () => {
    return gql `
    query MyQuery {
        posts(last: 1000) {
            nodes {
                id
                title
                slug
            }
        }
    }`
}

export const CLIENTS_QUERY = () => {
    return gql `
    query MyQuery {
        kunden(last: 1000) {
            nodes {
                id
                title
                slug
                kunden {
                    logoLight {
                        altText
                        mediaItemUrl
                        srcSet
                        mediaDetails {
                            height
                            width
                            sizes {
                                sourceUrl
                                name
                                height
                                width
                            }
                        }
                    }
                    logoDark {
                        altText
                        mediaItemUrl
                        srcSet
                        mediaDetails {
                            height
                            width
                            sizes {
                                sourceUrl
                                name
                                height
                                width
                            }
                        }
                    }
                }
            }
        }
    }`
}