# Theology Courses API

A RESTful API for accessing theology course materials, including course structures, weekly topics, learning outcomes, readings, multimedia resources, activities, and quizzes.

## 📚 About

This API provides structured access to theological education content, including:
- **THEO 101**: Introduction to Theology
- **BIBL 101**: Old Testament Survey

Each course contains 14 weeks of comprehensive materials designed for systematic theological study.

## 🚀 Features

- **Course Management**: Access complete course information
- **Weekly Structure**: Detailed week-by-week curriculum
- **Learning Resources**: Readings, multimedia, and activities
- **Assessment Tools**: Quizzes with multiple choice, short answer, and discussion questions
- **Search & Filter**: Find courses by various criteria

## 📋 API Endpoints

### Courses
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/courses` | Get all courses |
| `GET` | `/api/courses/:id` | Get course by ID (e.g., `THEO 101`) |
| `GET` | `/api/courses?year=:year&semester=:semester` | Filter courses by year/semester |
| `GET` | `/api/courses/search?q=:keyword` | Search courses by keyword |

### Weeks & Content
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/courses/:id/weeks` | Get all weeks for a course |
| `GET` | `/api/courses/:id/weeks/:weekNumber` | Get specific week details |
| `GET` | `/api/courses/:id/weeks/:weekNumber/quiz` | Get quiz for specific week |

### Resources
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/courses/:id/learning-outcomes` | Get all learning outcomes |
| `GET` | `/api/courses/:id/readings` | Get all readings |
| `GET` | `/api/courses/:id/multimedia` | Get all multimedia resources |
| `GET` | `/api/courses/:id/activities` | Get all activities |

## 🎯 Course Structure

Each course week includes:
- **Topic**: Weekly subject focus
- **Learning Outcomes**: Clear educational objectives
- **Readings**: Required and recommended texts
- **Multimedia**: Videos, podcasts, and visual resources
- **Activities**: Practical exercises and assignments
- **Quiz**: Assessment with multiple formats

## 📖 Available Courses

### THEO 101 - Introduction to Theology
**3 Credits | Year 1, Semester 1**

Weekly Topics:
1. What is Theology? Definitions & Tasks
2. Branches of Theology and Their Importance
3. Major Theological Questions
4. Revelation and Scripture
5. God and Attributes
6. Christology Basics
7. The Holy Spirit
8. Theology of Sin
9. Salvation and Grace
10. Theology of the Church
11. Theology of Worship
12. Theology of Prayer
13. Theology of Ethics
14. Review and Integration

### BIBL 101 - Old Testament Survey
**3 Credits | Year 1, Semester 1**

Weekly Topics:
1. Introduction to the Old Testament
2. The Pentateuch: Creation and Patriarchs
3. The Exodus and Law
4. Historical Books I: Conquest and Judges
5. Historical Books II: Samuel and Kings
6. Wisdom Literature I: Proverbs and Job
7. Wisdom Literature II: Ecclesiastes and Song of Songs
8. Major Prophets I: Isaiah and Jeremiah
9. Major Prophets II: Ezekiel and Daniel
10. Minor Prophets Overview
11. Psalms: Worship and Prayer
12. Proverbs and Wisdom Literature Integration
13. Prophetic Fulfillment and Messianic Hope
14. Semester Review and Integration

## 🔧 Example Usage

### Get all courses
```bash
GET /api/courses
