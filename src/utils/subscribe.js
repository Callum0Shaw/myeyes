import MailerLite from '@mailerlite/mailerlite-nodejs';

function addSubscriberToMailerLite(firstName, lastName, email) {
  const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNmIyYmRhMDJmYzlkMTY5YTE3OTg2OGNkZTI2MzE4NWNiNTU3MzlhYWExNzI2MDZiNDc1MGI5NDg1OTVlZGEyOWVmM2FmMGI1YWU3ZGE0NmYiLCJpYXQiOjE2ODAwMTg5MDUuNjMzNzg3LCJuYmYiOjE2ODAwMTg5MDUuNjMzNzg5LCJleHAiOjQ4MzU2OTI1MDUuNjI5MDUzLCJzdWIiOiIzNjM4MTEiLCJzY29wZXMiOltdfQ.UDi9-h1IZYYW3W9FYloYvQ1Eznxqo7Ly7UdQIv_5L78CZF3VaGvMC7dbNSssG8i7Qt3GWmZZjGD_p_am-mxqLa7d8FYibPWPoXd04S2BvQOdzUobINdmTcfc-ovH-Ukp2e90Csd9Wd_6bpzZdr1zjFiRSLoXfC7bDiqxSL-3qjDg1rikPvkmwmS2NPtJs2wCuarKHQxtpKItf1AKUqqutJpWOvqC7AY3UroA9yCjuVKF-ldUVg5bx4tx8HUbvF8kzfd_8D3DOhvErnXoQ_oiibLwGq9gKnOSsCWhsrtwQCV8U2F16wkPERW_j0a7mZq02bvAf-56wSzjDQgR70lXBgy2Z8CXMSSihNo6KqZGWbAXAGZdiHNK3B2ZRm0ZF1YmV_OyuXZ7zdJ_uxe8rDbZAQnkHyiY_VzgpUgCiAKhm8MtudKAROqTIokajVL_G9bHAwzoRxyJuVVwCuD9ZDq0tZ7sUyFdvE_n1e2Z0aBcHjR6jJ58Cy_3PDDIiNmM4kuNaY54Ptd2BgzchhhrsjMZPzshE4ymZk7M9sugVDCD-6MQ5FbjA83kr0ubHqdFdQ0udqGuibGS5_dgWUWln_3BLDnDWk2u1OUQlmBRfYXn5-PcN-mUd3rvJymQYVjyENWfU4Fd3pXrr7BmWvrGyIOPcoeU1-T1Yfluk7DRUAFb464';

  const mailerlite = new MailerLite({
    api_key: apiKey
  });
  const params = {
    email,
    fields: {
      name: `${firstName} ${lastName}`,
    },
    groups: [
      '83905594513163799'
    ]    
  };
  
  mailerlite.subscribers.createOrUpdate(params)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    if (error.response) console.log(error.response.data);
  });
 
}

export {addSubscriberToMailerLite}