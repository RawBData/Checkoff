# Checkoff

_A "Remember the Milk" clone, is a to do list/organizer/calendar that allows users to create task (and subtasks) with tags and notes._

[Checkoff Live](https://checkoff-rem-the-milk.herokuapp.com/ "Checkoff")

![Add Task](app/assets/images/checkoff_logo_black_short.png)


***
## Background and Overview
***


Checkoff is a minimal viable product to-list website, very much like "Remember The Milk". It has all of the normal CRUD cycles on the backend with RESTful API's as the endpoints for data management. On the front end, React and Redux are used to create a seemless interface that is intuituve and reactive.

The main engineering challenges faced were


- Database Management: Using Rails and Active Record to effecively strore data using assocations and tables. This design allows for large scaling while at the same does not compromise connection quality.

- User Authorization/Encryption: Users can interact on multiple platforms with almost an exact experience.

- Persistant: Using Rails to allow users to perform any function of the CRUD cycle as long as they logged in. Using React Redux to intuitively present that information.



Checkoff is primarily built with the RAILS stack, a combination of following four technologies: Rails, SQL, React, and Redux.


***
## Functionality
***

- [ ] Users will be able to log in securely from any browser
- [ ] Persistent tasks store in database
- [ ] Create Lists that contain tasks
- [ ] Create subtasks that are children of tasks
- [ ] Create tags that are attached to a task(s)
- [ ] User interface allows change of task attributes (i.e. date, note)
- [ ] Create ability to complete tasks and destroy list, tasks, notes, and tags


### Bonus Features

- [ ] Colorful user display for creatings tags or deleting tasks
- [ ] Lists can display specific tasks assigned to it
- [ ] Completed and incompleted tasks are displayed on demand

***
## Technologies & Challenges
***

### Architecture

Checkoff is primarily built with the RAILS stack, a combination of following four technologies: Rails, SQL, React, and Redux. It features creative use of rails server technology, multiple API's and CSS graphics in conjunction with client side rendering with React with data passed in through Redux.

The overall architecture is summarized in the diagram below:

![Splash](./readme_files/rails-react-redux.png)

#### Backend: Rails Server, PostgreSQL

On the backend we will be using PostgreSQL to house our data. The backend routes will be managed by Rails routes following the RESTful API design pattern. With this design, the CRUD cycle was implemented for all muteable data objects.

Checkoff will have mutliple models.
- A User's model which tracks an individual users personal data, username, and password.
```ruby
    create_table "users" do |t|
        t.string "username"
        t.string "password_digest"
        t.string "session_token"
        t.datetime "created_at", null: false
        t.datetime "updated_at", null: false
        t.index ["session_token"], name: "index_users_on_session_token", unique: true
        t.index ["username"], name: "index_users_on_username", unique: true
    end
```
- A List which can contain a reference to the aurthor id.

```ruby
    create_table "lists", force: :cascade do |t|
        t.string "name", null: false
        t.integer "author_id", null: false
        t.datetime "created_at", null: false
        t.datetime "updated_at", null: false
        t.index ["author_id"], name: "index_lists_on_author_id"
        t.index ["name"], name: "index_lists_on_title"
    end
```
- A task which can contain a reference to parent task objects (if any), notes and list id.

```ruby
    create_table "tasks", force: :cascade do |t|
        t.string "title", null: false
        t.date "start_date"
        t.date "due_date"
        t.integer "author_id", null: false
        t.integer "performer_id"
        t.integer "list_id"
        t.integer "parent_id"
        t.boolean "complete", default: false
        t.datetime "created_at", null: false
        t.datetime "updated_at", null: false
        t.integer "priority"
        t.text "notes"
        t.index ["author_id"], name: "index_tasks_on_author_id"
        t.index ["list_id"], name: "index_tasks_on_list_id"
        t.index ["parent_id"], name: "index_tasks_on_parent_id"
        t.index ["performer_id"], name: "index_tasks_on_performer_id"
        t.index ["title"], name: "index_tasks_on_title"
    end
    


```
- Other models fill all the CRUD cycle necessities



#### Frontend: React and React Native with Redux

- Clearly defined media queries to ensure performance  & consistent user experience across multiple platforms.

- By building mobile first the user's experiences will be synchronous, optimized, and uniform.



- Use Redux to pass data into the front end for display
    ```javascript
    const configureStore = (preloadedState = {})=>{
    return createStore(rootReducer,preloadedState,applyMiddleware(thunk));
    };
    ```

- Use the Redux Reducer to manage changes to state.
    ```javascript
    const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer
    });

    ```


***
## UI/UX
***

The goal is to create a unique user experience that is intuitive to use and quick to pick up. The design is based on the website Remember the Milk.


![splash page](readme_files/splash.png)

**This single page web app will have a splash page with a sign up and login. Once logged in, a user is greeted with a display dashboard with current tasks.**
- **Create Tasks**: Users can add new task

![create task](readme_files/create_task.gif)

- **Edit Tasks**: Users can edit all tasks

![edit task](readme_files/edit_task.gif)

- **Create and Display Lists**: Users can create new lists and add tasks to it

![create lists](readme_files/create_list.gif)







## Creator

**Benjamin Rawner**



