import {useState} from 'react'
import questions from '../../questions.json'
import { CopyBlock, zenburn } from "react-code-blocks";
import { Select, Collapse, Button } from "antd";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";


const QuestionList = () => {
    const [question, setQuestion] = useState(0);
    const questionsList = questions.map((question) => {
        return (
          <div key={question.id} className="question-item">
            <h2>
              {question.id}.{question.question}
            </h2>
            {question.answer.map((answer) => {
              return (
                <div key={answer.id}>
                  {answer?.text?.map((el, i) => {
                    return <p key={i + answer.id}>{el}</p>;
                  })}
                  {answer.code && (
                    <CopyBlock
                      text={answer.code}
                      language={"php"}
                      showLineNumbers={true}
                      theme={zenburn}
                      wrapLines={true} // wrapLines
                      codeBlock
                    />
                  )}
                  {answer.list && (
                    <ol>
                      {answer.list.map((listItem, i) => (
                        <li key={answer.id + i}>{listItem}</li>
                      ))}
                    </ol>
                  )}
                </div>
              );
            })}
          </div>
        );
    })

    const onChange = (value) => {
      setQuestion(value)
    };

    const getItems = () => {
      return [
        {
          key: "question.id",
          label: questions[question].question,
          children: questionsList[question],
        },
      ];
    };


    return (
      <div className="question-list">
        <h1>Выберите Вопрос:</h1>
        <div className="buttons">
          <Button
            className="item-1"
            onClick={() => setQuestion(question - 1)}
            disabled={question === 0}
          >
            <ArrowLeftOutlined />
            Previous
          </Button>
          <Select
            showSearch
            placeholder="Select a person"
            optionFilterProp="label"
            onChange={onChange}
            defaultValue={question}
            style={{ width: 320 }}
            className="item-2"
            options={questions.map((el, i) => {
              return {
                value: i,
                label: `${el.id}. ${el.question}`,
              };
            })}
          />
          <Button
            className="item-3"
            onClick={() => setQuestion(question + 1)}
            disabled={question === questions.length - 1}
          >
            Next
            <ArrowRightOutlined />
          </Button>
        </div>
        <div className="question">
          <Collapse items={getItems()} />
        </div>
      </div>
    );
}

export default QuestionList