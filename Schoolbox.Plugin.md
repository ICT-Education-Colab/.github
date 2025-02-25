# Schoolbox.Plugin

An unofficial plugin that enhances the SchoolBox experience for staff members by adding valuable student information and accessibility features.

This repository provides a distilled branch version of the bespoke framework implemented at Presbyterian Ladies College (PLC)—Melbourne. It has been released with PLC's permission and is a rework of the bespoke source code, which excludes embedded business rules that may not be suitable for broader school communities. 

We aim to share our insights and work so that others can benefit from it and extend its features if necessary.

## Features

### 🔊 Student Name Pronunciation
On student profile page, display a speaker button next to student name to play pre-recorded pronunciations of students' names, allowing staff members to hear the correct pronunciation.

Available to Staff Role only.

### ✓ Student Attendance Status
On student profile page, displays the current student attendance. This feature is only accessible to users with a "Staff Role" to allow them to quickly identify each student's attendance status, including reasons for absences.

Available to Staff Role only.

### 📅 Student Timetable/Schedule
On student profile page, displays the student's schedule or timetable for today. This enables staff to quickly glance at the students' daily schedule and promptly identify their current class. It is a great way to aggregate schedules that come from multiple, unsynchronized sources outside of Schoolbox.

Available to Staff Role only.

### ℹ️ Student Status Decoder
On student profile page, adds tooltip to student's status symbol assigned to position title. For staff, it decodes the `({{search}})` symbol with a helpful hint. Tooltips explain symbols and indicators assigned to students, improving understanding of student status markers and special notifications. This helps new staff members quickly learn the system.

Decodes for Staff Role only, otherwise it hides the symbol.

## Usage
Once installed and enabled, the plugin automatically enhances the SchoolBox Student profile interface. No additional actions are required from the end user to access the new features.

## Requirements
- Schoolbox version 22 or higher
- On-Prem Synergetic Database
- IIS 10 or higher (by request, able to extend the code to use on Azure Function)
- MS SQL Server 2019 or higher

## Installation Overview
- 🖥 __Client Component__: Configure & install javascript on Schoolbox
- 🎛 __Middleware Service Component__: Install REST API via IIS (by request, able to extend the code to use on Azure Function)
- 🗄 __Database Component__: Install required database objects on MS SQL

See [INSTALL.MD](INSTALL.md) for detailed instructions.

## Support
While this is an unofficial plugin, you can:
- Report issues through the GitHub issue tracker
- Contact the maintainer for critical bugs

## Disclaimer
This plugin is not officially associated with or endorsed by Schoolbox. Use at your own discretion and ensure compliance with your institution's policies.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
