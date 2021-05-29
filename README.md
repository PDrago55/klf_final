### KLF Exam

Hello! Welcome to my basic sampler website called, Tutoring Works! an online application used for students to begin training and learning from skiiled tutors.

<img src="klf/public/landingpage.png" alt="Error Landing PAge">

## Languages used

Javascript, ReactJS, NodeJS, ExpressJS, CSS, HTML5, SQL

---

# Assessment 1 & 2

## Navigation bar

The navigation bar connects to all four sections of the Single Page Application.

I ensured the scroll-behavior would smooted to avoid abrupt jumps to each section.

---

## Company Values

I tried to add a small section regarding company values and products. In an ideal world, I would have turned the three cards into three indiviudal pages that would go into greater detail on the products.

I Would have also added redux & reduc-thunk to initiate purchasing options for tutoring. I have made a few projects with redux. With more time, this would have been fun.

<img src="klf/public/company.png">

---

## Account Details

For Accoutn details, I opted for more functionality rather than CSS designs, simply because of time :(.

However, both submition forms send a post request to the back-end of the application.

With more time, I would have added a validation file that would go through each "req.body" value, to ensure that the information is correct. Finally, I would have put the value as an object and stored it as a MongoDB Collection.

<img src="klf/public/account.png">

---

## Form

The form is fully functionning. I used a NodeJS library called Nodemailer. It allowd owners to set up automatic emails on submit from clients. The hardest part is removing the security concerns from Gmail. However, any email on submit will end up on my email list.

On the front-end, the post request is on the button.

<img src="klf/public/form.png">

# Assesment 3 SQL

This was by far the hardest part for me to complete. I was unable to scope this section into the final application as MySQL was giving me tons of problems

My solution came down to understanding how aggregation works for columns and rows in SQL. Learning how to group similar items of importance together was what mattered.

Solution

SELECT u.name AS 'user_name', a.name AS 'activity_name', COUNT AS 'amount', MIN(occurrence) AS 'first_occurrence', MAX(occurrence) AS 'last_occurrence'
FROM user AS u, activity AS a, user_activity AS ua
WHERE u.id = ua.user_id
AND a.id = ua.activity_id
GROUP BY u.id, a.id
ORDER BY a.id;

## Final thoughts

I would just like to thank you again for the opportunity. My work schedule severly conflicted with the deadline but I am happy with what I was able to accomplish nonetheless.
