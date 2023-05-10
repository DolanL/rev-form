import {Alert, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography} from "@mui/material";
import {useForm} from "react-hook-form";
import styles from "./Form.module.css"
import {ChangeEvent, useState} from "react";
import TextareaAutosize from '@mui/material/TextareaAutosize';

export const Form = () => {

  const [tower, setTower] = useState('')
  const [meetingRoom, setMeetingRoom] = useState('')
  const [level, setLevel] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [commentary, setCommentary] = useState('')

  const handleTowerChange = (event: SelectChangeEvent) => {
    setTower(event.target.value as string);
  };

  const handleLevelChange = (event: SelectChangeEvent) => {
    setLevel(event.target.value as string);
  };

  const handleMeetingRoomChange = (event: SelectChangeEvent) => {
    setMeetingRoom(event.target.value as string);
  };

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.currentTarget.value)
  };

  const handleCommentaryChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentary(event.currentTarget.value)
  }

  const onClickHandler = () => {
    setSelectedDate('')
    setLevel('')
    setMeetingRoom('')
    setTower('')
    setCommentary('')
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = async (data: any) => {
    console.log(data)
  };


  return (
  <form action="src/Form/Form" onSubmit={handleSubmit(onSubmit)}>
    <Typography style={{marginBottom: '20px'}} classes={{ root: styles.title }} variant="h5">
      Форма бронирования переговорной
    </Typography>
    <FormControl className={styles.input}>
      <InputLabel id="tower">Tower</InputLabel>
      <Select
        {...register("tower", {
          required: "Поле обязательно к заполнению!",
        })}
        style={{width: '100px'}}
        labelId="tower"
        id="tower"
        value={tower}
        label="asdasd"
        onChange={handleTowerChange}
      >
        <MenuItem value={'А'}>А</MenuItem>
        <MenuItem value={'Б'}>Б</MenuItem>
      </Select>
    </FormControl>
    <FormControl className={styles.input}>
      <InputLabel id="level">Level</InputLabel>
      <Select
        {...register("level", {
          required: "Поле обязательно к заполнению!",
        })}
        style={{width: '100px'}}
        labelId="level"
        id="level"
        value={level}
        label="asdasd"
        onChange={handleLevelChange}
      >
        {Array.from(Array(27).keys()).map((i) => (
          <MenuItem key={i} value={i + 1}>
            {i + 1}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    <FormControl className={styles.input}>
      <InputLabel id="meeting_room">Meeting room</InputLabel>
      <Select
        {...register("meeting_room", {
          required: "Поле обязательно к заполнению!",
        })}
        style={{width: '100px'}}
        labelId="meeting_room"
        id="meeting_room"
        value={meetingRoom}
        label="asdasd"
        onChange={handleMeetingRoomChange}
      >
        {Array.from(Array(10).keys()).map((i) => (
          <MenuItem key={i} value={i + 1}>
            {i + 1}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    <input
      {...register("date", {
        required: "Поле обязательно к заполнению!",
      })}
      value={selectedDate}
      onChange={handleDateChange}
      type="date"
      style={{height: '53px'}}
    />
    <TextareaAutosize
      {...register("commentary", {
        required: "Поле обязательно к заполнению!",
      })}
      value={commentary}
      onChange={handleCommentaryChange}
      minRows={10} style={{width: '492px', fontSize:'15px'}}
      placeholder="Type commentary" />
    <Button size="large" variant="contained" type={"submit"} fullWidth>
    Отправить
    </Button>
    <Button onClick={onClickHandler} size="large" variant="contained" fullWidth>
      Очистить
    </Button>
    {Object.keys(errors).length !== 0 ? <Alert severity="error">
      Введите недостающиеся поля!
    </Alert> : ""}
  </form>
);
};