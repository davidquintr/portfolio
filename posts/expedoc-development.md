---
title: "Expedoc Development"
description: "Details about the development of web platform 'Expediente Docente'."
date: "2023-06-15"
tags: ["Full Stack", "Development", "ASP.Net", "Expediente Docente"]
---

# Generalities

To begin with, it is important to clarify the objectives and target audience of this project. The project **'Expediente Docente'** was specifically developed for the Education Department at [Universidad Centroamericana](https://www.uca.edu.ni/) de Nicaragua as part of the mid-practice program in **System Engineering career.**

**'Expediente Docente'** serves as an internal social network within the [Education Department](http://blog.uca.edu.ni/departamentoeducacion/), but with a distinct purpose. Its primary objective is to effectively manage the academic and professional lives of the department's teachers, while also providing valuable feedback to enhance their teaching practices.

## Project Vision

Although it was necessary to meet the **stakeholder's** objectives in terms of required functionalities, I personally had a different vision. I considered the interfaces and user experience of the university's web services to be outdated, unfriendly, and simple.

One of the limitations I identified was the use of [Bootstrap](https://getbootstrap.com/) in the project and requirements, as it greatly restricted the visual freedoms of the application. By consensus with my development team, we decided not to use this graphical framework and create the styles from zero. The visual result was considerably better than if we had used Bootstrap.

The objective I set for the application was to surpass any existing platform within the university and in my country. This is not an unrealistic goal to imagine since the majority of universities do not have a similar system, and if they do, they rely on an external CMS or LMS.

I believe that the development results were satisfactory for both the stakeholder and the development team. We managed to achieve the set objectives and, at the same time, significantly improved the visual and user experience compared to other existing platforms.

## Contributions

I had a position in the project to create bases, features, and styles for it. Besides, I fixed the structures and several minimal things.

![Contributions](../blog/expedoc-general/davidquint-contributions.png)

## In the application

Within the **'Expediente Docente'** application, there are various main menus available: **Dashboard, Feedback, Academic Areas, Convocations, Teachers, Users, Departments, Expedient, Role, and Role Options.** Each main menu has specific permission requirements, although a role with all options enabled has unrestricted access to all features. The system offers a range of functionalities, which are outlined below:

### Dashboard

The system is equipped with two points of view of Dashboard, one special for users considered **Administrator** and another ordinary for those considered **teacher** or **ordinary users**.

![Expedoc Dashboard Admin](../blog/expedoc-general/expedoc-dashboard-admin.png)
![Expedoc Dashboard Teach](../blog/expedoc-general/expedoc-dashboard-teach.png)

### Department

This is the major container of the system, the department **is who globes the distinct areas of the college**, the department can have multiples academic areas.

![Expedoc Department](../blog/expedoc-general/expedoc-department.png)

### Academic Areas

This is the container of the users.

![Expedoc Academic](../blog/expedoc-general/expedoc-academic.png)
![Expedoc Academic Form](../blog/expedoc-general/expedoc-academic-form.png)

### Users

Basically, the user accesses the platform.

![Expedoc Users](../blog/expedoc-general/expedoc-users.png)
![Expedoc Users Form](../blog/expedoc-general/expedoc-users-form.png)

### Teachers

![Expedoc Teachers](../blog/expedoc-general/expedoc-teacher.png)

### Expedient

The expedient **is all the relevant info of the teacher**, with all this mini-expedient

<video autoplay loop muted controls>
	<source src="../blog/expedoc-general/expedoc-search.mp4">
</video>

| Name                   | Description                                                        |
|------------------------|--------------------------------------------------------------------|
| General data           | Relevant personal data of users like birthday, ID, mail, gender, and others.|
| Professional summary   | Is a summary of 200 characters with the job experience.            |
| Degree                 | Are the college degree of the teacher.                              |
| Courses                | Are the courses taught in their exercise of the teacher in the college or other institutions.|
| Intellectual production | Basically, are the books or articles published in APA format.      |
| Projects               | Projects where the teacher has a participation with any role.      |
| Recognitions           | Are recognitions granted for any institution, for participations or other reasons.|
| Teacher training       | These are courses that the teacher has taken for their education.   |
| Professional Experience | Is the professional experience.                                    |
| Professional Expertise | Essentially areas of expertise of the teacher.                      |

### Convocations

These are events that **open up to system users to fill out their data or receive feedback from users with special roles**, who in practice are their superiors.

![Expedoc Convocations](../blog/expedoc-general/expedoc-ann.png)
![Expedoc Convocations Form](../blog/expedoc-general/expedoc-ann-form.png)

### Role

Roles are badges or positions held by a user; they do not do anything on their own.

![Expedoc Role](../blog/expedoc-general/expedoc-role.png)
![Expedoc Role Form](../blog/expedoc-general/expedoc-role-form.png)

### Role Options

These are the permissions granted to a role.

![Expedoc Options](../blog/expedoc-general/expedoc-options.png)
![Expedoc Options Form](../blog/expedoc-general/expedoc-options-form.png)

### Feedback

Feedback serves to provide a message of constructive criticism in the exercise of the teaching role.

![Expedoc Feedback](../blog/expedoc-general/expedoc-feedback.png)
![Expedoc Feedback Form](../blog/expedoc-general/expedoc-feedback-form.png)

### Comments

Comments are available as responses in the Feedback section and in each section of the Record.

![Expedoc Comments Expedient](../blog/expedoc-general/expedoc-comments-expedient.png)
![Expedoc Comments Feedback](../blog/expedoc-general/expedoc-comments-feedback.png)

### Search Functions

These are ways to **filter data or information in any of the sections**. They have cumulative filters to increase accuracy and also have a simple search function.

<video autoplay loop muted controls>
	<source src="../blog/expedoc-general/expedoc-search.mp4">
</video>

### Settings

Settings include accessibility configurations, such as **dark mode, dyslexia-friendly font, font size, high contrast, square borders, and user credentials**, which allow changing user credentials.

<video autoplay loop muted controls>
	<source src="../blog/expedoc-general/expedoc-settings.mp4">
</video>

### Expedient Evaluation

This is a special functionality for users with special roles, which **allows leaving a comment and approving or revoking the data provided by the evaluated teacher**. This applies to each section of the Expedient.

![Expedoc Expedient Evaluation](../blog/expedoc-general/expedoc-expediente-evaluation.png)

### Toggle Role

This feature is used if a user has more than one role. It provides a quick way to **switch the system's perspective**.

<video autoplay loop muted controls>
	<source src="../blog/expedoc-general/expedoc-role-change.mp4">
</video>

## Application development status

As of the date of this post, the application is **still in the development phase**. However, our stakeholders are pleased with the progress made so far in developing the web application. **There are a few remaining functionalities and minor details to be implemented**, which we anticipate completing within the next two months. This will bring us closer to the final stages of development and the subsequent deployment of the system on the servers of [Universidad Centroamericana](https://www.uca.edu.ni/).

## Open Source

At least for now, I can't publish all the code of **'Expediente Docente'**, but I can reveal certain parts of it; I just need to make sure that the disclosed code doesn't compromise the security of the system.

## Thanks

Special thanks to my **development team**. I lead them, but a great part of the work is of them.

### Development Team

<div style="display: flex; flex-wrap: wrap; gap: 5px;">
  <a href="https://github.com/VarEros"><img width="48" src="https://github.com/VarEros.png" alt="VarEros GitHub" style="margin: 0;" loading="lazy"></a>
  <a href="https://github.com/Xeppyz"><img width="48" src="https://github.com/Xeppyz.png" alt="Xeppyz GitHub" style="margin: 0;" loading="lazy"></a>
  <a href="https://github.com/Poncka"><img width="48" src="https://github.com/Poncka.png" alt="Poncka GitHub" style="margin: 0;" loading="lazy"></a>
  <a href="https://github.com/andreitaglz1"><img width="48" src="https://github.com/andreitaglz1.png" alt="andreitaglz1 GitHub" style="margin: 0;" loading="lazy"></a>
  <a href="https://github.com/MrSty"><img width="48" src="https://github.com/MrSty.png" alt="MrSty GitHub" style="margin: 0;" loading="lazy"></a>
  <a href="https://github.com/gmabs"><img width="48" src="https://github.com/gmabs.png" alt="gmabs GitHub" style="margin: 0;" loading="lazy"></a>
  <a href="https://github.com/EduardJiron"><img width="48" src="https://github.com/EduardJiron.png" alt="EduardJiron GitHub" style="margin: 0;" loading="lazy"></a>
  <a href="https://github.com/rmtai"><img width="48" src="https://github.com/rmtai.png" alt="rmtai GitHub" style="margin: 0;" loading="lazy"></a>
  <a href="https://github.com/GPorrasV"><img width="48" src="https://github.com/GPorrasV.png" alt="GPorrasV GitHub" style="margin: 0;" loading="lazy"></a>
  <a href="https://github.com/RiuskeKMS"><img width="48" src="https://github.com/RiuskeKMS.png" alt="RiuskeKMS GitHub" style="margin: 0;" loading="lazy"></a>
  <a href="https://github.com/BenjaminNarvaez-est"><img width="48" src="https://github.com/BenjaminNarvaez-est.png" alt="BenjaminNarvaez-est GitHub" style="margin: 0;" loading="lazy"></a>
  <a href="https://github.com/GhostlyCoder20"><img width="48" src="https://github.com/GhostlyCoder20.png" alt="GhostlyCoder20 GitHub" style="margin: 0;" loading="lazy"></a>
  <a href="https://github.com/simplyZair"><img width="48" src="https://github.com/simplyZair.png" alt="simplyZair GitHub" style="margin: 0;" loading="lazy"></a>
</div>
